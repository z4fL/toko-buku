<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;
use App\Models\Book;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class BookController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $books = Book::paginate();
    return (new BookCollection($books))->response();
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $request->validate([
      'isbn' => 'bail|required|string|max:255',
      'title' => 'bail|required|string|max:255',
      'author_id' => 'bail|required|integer',
      'publisher_id' => 'bail|required|integer',
      'publish_year' => 'bail|required|date_format:Y',
      'page_count' => 'required|integer',
      'price' => 'required|numeric|min:0',
      'stock' => 'required|integer|min:0',
      'img_url' => 'required|url'
    ]);

    $book = new Book();
    $book->isbn = $request->isbn;
    $book->title = $request->title;
    $book->author_id = $request->author_id;
    $book->publisher_id = $request->publisher_id;
    $book->publish_year = $request->publis_year;
    $book->page_count = $request->page_count;
    $book->price = $request->price;
    $book->stock = $request->stock;
    $book->img_url = $request->img_url;
    $book->save();

    Log::info("Book ID {$book->id} created successfully.");

    return (new BookResource($book))->response()->setStatusCode(Response::HTTP_CREATED);
  }

  /**
   * Display the specified resource.
   */
  public function show(Book $book)
  {
    return (new BookResource($book))->response();
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, Book $book)
  {
    $request->validate([
      'isbn' => 'bail|required|string|max:255',
      'title' => 'bail|required|string|max:255',
      'author_id' => 'bail|required|integer',
      'publisher_id' => 'bail|required|integer',
      'publish_year' => 'bail|required|date_format:Y',
      'page_count' => 'required|integer',
      'price' => 'required|numeric|min:0',
      'stock' => 'required|integer|min:0',
      'img_url' => 'required|url'
    ]);

    $book->isbn = $request->isbn;
    $book->title = $request->title;
    $book->author_id = $request->author_id;
    $book->publisher_id = $request->publisher_id;
    $book->publish_year = $request->publis_year;
    $book->page_count = $request->page_count;
    $book->price = $request->price;
    $book->stock = $request->stock;
    $book->img_url = $request->img_url;
    $book->save();

    Log::info("Book ID {$book->id} updated successfully.");

    return (new BookResource($book))->response();
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(Book $book)
  {
    $book->delete();

    Log::info("Book ID {$book->id} deleted successfully.");

    return response(null, Response::HTTP_NO_CONTENT);
  }
}
