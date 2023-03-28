<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cart_id');
            $table->string('recipient_name', 100);
            $table->string('no_hp', 14);
            $table->text('shipping_address');
            $table->string('payment_method');
            $table->foreignId('delivery_service_id');
            $table->string('shipping_status');
            $table->date('shipping_date');
            $table->string('note');
            $table->unsignedInteger('long_date');
            $table->string('order_status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
