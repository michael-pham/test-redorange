<?php

namespace Api\LoaiBaiViets\Requests;

use Infrastructure\Http\ApiRequest;

class CreateLoaiBaiVietRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'loaiBaiViet' => 'array|required',
'loaiBaiViet.ten' => 'required|string|max:255',
'loaiBaiViet.mo_ta' => 'nullable|string|max:500'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'loaiBaiViet.ten.required' => 'Tên là trường bắt buộc.',
        'loaiBaiViet.ten.max' => 'Tên không được vượt quá 255.',
        'loaiBaiViet.mo_ta.max' => 'Mô tả không được vượt quá 500.'
        // end_messages
      ];
    }
}
