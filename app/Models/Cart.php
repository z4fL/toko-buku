<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
  use HasFactory;

  public function user()
  {
    return $this->belongsTo(User::class, 'user_id', 'id');
  }

  public function books()
  {
    return $this->belongsToMany(Book::class, 'cart_details', 'cart_id', 'book_id');
  }

  public function order()
  {
    return $this->hasOne(Order::class, 'cart_id' ,'id');
  }
}
