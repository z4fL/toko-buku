<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
  use HasFactory;

  public function author()
  {
    return $this->belongsTo(Author::class, 'author_id', 'id');
  }

  public function publihser()
  {
    return $this->belongsTo(Publisher::class, 'publisher_id', 'id');
  }

  public function categories()
  {
    return $this->belongsToMany(Category::class, 'book_category', 'book_id', 'category_id');
  }

  public function genres()
  {
    return $this->belongsToMany(Genre::class, 'book_category', 'book_id', 'genre_id');
  }

  public function carts()
  {
    return $this->belongsToMany(Cart::class, 'cart_details', 'book_id', 'cart_id');
  }
}
