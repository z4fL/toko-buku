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
        Schema::create('shipping_addresses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('recipient_name', 100);
            $table->string('no_hp', 14);
            $table->text('address');
            $table->string('province', 50);
            $table->string('regency', 50);
            $table->string('district', 50);
            $table->string('village', 50);
            $table->string('postal_code', 50);
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
        Schema::dropIfExists('shipping_addresses');
    }
};
