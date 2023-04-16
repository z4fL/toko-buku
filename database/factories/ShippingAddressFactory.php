<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ShippingAddress>
 */
class ShippingAddressFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    $user = User::select('id', 'name', 'no_hp')->inRandomOrder()->first();

    return [
      "user_id" => $user->id,
      "recipient_name" => $user->name,
      "no_hp" => $user->no_hp,
      "address" => fake()->address(),
      "province" => fake()->country(),
      "regency" => fake()->city(),
      "subdistrict" => fake()->streetName(),
      "village" => fake()->streetAddress(),
      "postal_code" => fake()->postcode(),
    ];
  }
}
