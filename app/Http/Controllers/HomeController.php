<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    return Inertia::render('Index/Home', [
      "title" => "Home page"
    ]);
  }

  public function book()
  {
    return Inertia::render('Index/Books', [
      "title" => "Books"
    ]);
  }

  public function about()
  {
    return Inertia::render('Index/About', [
      "title" => "About"
    ]);
  }

  public function cart()
  {
    return Inertia::render('Index/Cart', [
      "title" => "Cart"
    ]);
  }

  public function bookRecommendations()
  {
    return Inertia::render('Books/BookRecommendations', [
      "title" => "Recomendations"
    ]);
  }

  public function bookCategories(Category $category)
  {

    return Inertia::render('Books/BookCategories', [
      "title" => "Categories"
    ]);
  }
}
