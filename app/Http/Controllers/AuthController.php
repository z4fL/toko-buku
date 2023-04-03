<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
  public function loginView()
  {
    return Inertia::render('Auth/Login', ["title" => "Login"]);
  }

  public function registerView()
  {
    return "register";
  }
}
