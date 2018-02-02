<?php

namespace Api\MayIns\Requests;

use Infrastructure\Http\ApiRequest;

class CreateMayInRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'mayIn' => 'array|required',
'mayIn.ten' => 'required|unique:may_ins,ten|string|max:200|min:1'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'mayIn.ten.required' => 'ten máy in là trường bắt buộc.',
        'mayIn.ten.unique' => 'ten máy in đã tồn tại.',
        'mayIn.ten.max' => 'ten máy in không được vượt quá 200.',
        'mayIn.ten.min' => 'ten máy in không được nhỏ hơn 1.'
        // end_messages
      ];
    }
}
