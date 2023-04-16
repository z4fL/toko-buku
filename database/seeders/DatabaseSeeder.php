<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Author;
use App\Models\Book;
use App\Models\Category;
use App\Models\DeliverService;
use App\Models\Genre;
use App\Models\Publisher;
use App\Models\ShippingAddress;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    User::factory(10)->create();
    ShippingAddress::factory(20)->create();
    Author::factory(10)->create();
    Publisher::factory(5)->create();
    Genre::factory(8)->create();
    Category::factory(9)->create();
    Book::factory(50)->create();
    DeliverService::factory(4)->create();
  }
}
