<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
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
}
