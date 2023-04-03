<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class PhoneNumber implements ValidationRule
{
  /**
   * Run the validation rule.
   *
   * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
   */
  public function validate(string $attribute, mixed $value, Closure $fail): void
  {
    if (!preg_match('^(\+62|62|0)8[1-9][0-9]{6,9}$^', $value) && strlen($value) >= 10) {
      $fail('Nomor HP tidak valid');
    }
  }
}
