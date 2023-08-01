<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BooksController extends Controller
{

  public function bookCategories(Category $category)
  {
    return Inertia::render('Books/BookCategories', [
      "title" => "Categories"
    ]);
  }

  public function bookRecommendations()
  {
    return Inertia::render('Books/BookRecommendations', [
      "title" => "Recomendations"
    ]);
  }

  public function bookBestSeller()
  {
    return Inertia::render('Books/BooksBestSeller', [
      "title" => "Bestseller"
    ]);
  }

  public function bookLatest()
  {
    return Inertia::render('Books/BooksLatest', [
      "title" => "Latest"
    ]);
  }
}
