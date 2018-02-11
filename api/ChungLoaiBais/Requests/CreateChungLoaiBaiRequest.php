<?php

namespace Api\ChungLoaiBais\Requests;

use Infrastructure\Http\ApiRequest;

class CreateChungLoaiBaiRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'chungLoaiBai' => 'array|required',
'chungLoaiBai.ten' => 'required|string|max:255',
'chungLoaiBai.mo_ta' => 'nullable|string|max:500'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'chungLoaiBai.ten.required' => 'Tên là trường bắt buộc.',
        'chungLoaiBai.ten.max' => 'Tên không được vượt quá 255.',
        'chungLoaiBai.mo_ta.max' => 'Mô tả không được vượt quá 500.'
        // end_messages
      ];
    }
}
