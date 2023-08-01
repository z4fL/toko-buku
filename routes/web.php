<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\IndexController;
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

// index routes
Route::prefix('/')->group(function () {
  Route::get('/', [IndexController::class, 'index'])->name('index.index');
  Route::get('/book', [IndexController::class, 'book'])->name('index.book');
  Route::redirect('/book', '/book/latest');
  Route::get('/about', [IndexController::class, 'about'])->name('index.about');
});

// books routes
Route::prefix('book')->group(function () {
  Route::get('/category/{category}', [BooksController::class, 'bookCategories'])->name('book.categories');
  Route::get('/recomendations', [BooksController::class, 'bookRecommendations'])->name('book.recommendations');
  Route::get('/bestseller', [BooksController::class, 'bookBestSeller'])->name('book.bestseller');
  Route::get('/latest', [BooksController::class, 'bookLatest'])->name('book.latest');
});

// // guest routes
// Route::middleware('guest')->group(function () {
//   Route::get('/login', [AuthController::class, 'loginView'])->name('login');
// });

// // auth routes
// // Route::middleware('auth')->group(function () {
// //   Route::get('/cart', [HomeController::class, 'cart'])->name('cart');
// // });
