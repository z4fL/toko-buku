<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliverService extends Model
{
  use HasFactory;

  public function orders()
  {
    return $this->hasMany(Order::class, 'delivery_service_id', 'id');
  }
}
