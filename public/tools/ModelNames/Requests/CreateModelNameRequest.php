<?php

namespace Api\ModelNames\Requests;

use Infrastructure\Http\ApiRequest;

class CreateModelNameRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
// REPLACEMENT
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
          // 'name.required' => 'Yo, what should I call you?',
          // 'email.required' => 'We need your email address also',
          // 'message.required'  => 'c\'mon, you want to contact me without saying anything?',
        // end_messages
      ];
    }
}
