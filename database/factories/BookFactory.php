<?php

namespace Database\Factories;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\Genre;
use App\Models\Publisher;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Auth;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
  protected $model = Book::class;
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      "isbn" => fake()->isbn13(),
      "title" => fake()->sentence(),
      "author_id" => Author::pluck('id')->random(),
      "publisher_id" => Publisher::pluck('id')->random(),
      "publish_year" => fake()->year(),
      "page_count" => fake()->randomNumber(3),
      "price" => fake()->randomNumber(2, true) . '000',
      "stock" => fake()->randomNumber(3)
    ];
  }

  public function configure()
  {
    return $this->afterCreating(function (Book $book) {
      $genre = Genre::inRandomOrder()->take(random_int(1, 3))->get();
      $book->genres()->attach($genre->pluck('id'));

      $category = Category::inRandomOrder()->take(random_int(1, 4))->get();
      $book->categories()->attach($category->pluck('id'));
    });
  }
}
