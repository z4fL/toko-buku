<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// home routes
Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('/book', [HomeController::class, 'book'])->name('book');
Route::get('/about', [HomeController::class, 'about'])->name('about');

// books routes
Route::prefix('book')->group(function () {
  Route::get('/recomendations', [HomeController::class, 'bookRecomendations'])->name('recomendations');
  Route::get('/categories', [HomeController::class, 'bookCategories'])->name('categories');
});

// guest routes
Route::middleware('guest')->group(function () {
  Route::get('/login', [AuthController::class, 'loginView'])->name('login');
});

// auth routes
Route::middleware('auth')->group(function () {
  Route::get('/cart', [HomeController::class, 'cart'])->name('cart');
});

