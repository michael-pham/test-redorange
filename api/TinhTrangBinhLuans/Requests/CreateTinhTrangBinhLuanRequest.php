<?php

namespace Api\TinhTrangBinhLuans\Requests;

use Infrastructure\Http\ApiRequest;

class CreateTinhTrangBinhLuanRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'tinhTrangBinhLuan' => 'array|required',
'tinhTrangBinhLuan.ten' => 'required|string|max:255',
'tinhTrangBinhLuan.mo_ta' => 'nullable|string|max:500'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'tinhTrangBinhLuan.ten.required' => 'Tên là trường bắt buộc.',
        'tinhTrangBinhLuan.ten.max' => 'Tên không được vượt quá 255.',
        'tinhTrangBinhLuan.mo_ta.max' => 'Mô tả không được vượt quá 500.'
        // end_messages
      ];
    }
}
