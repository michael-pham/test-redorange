<?php

namespace Api\TinhTrangBaiViets\Requests;

use Infrastructure\Http\ApiRequest;

class CreateTinhTrangBaiVietRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'tinhTrangBaiViet' => 'array|required',
'tinhTrangBaiViet.ten' => 'required|string|max:255',
'tinhTrangBaiViet.mo_ta' => 'nullable|string|max:500'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'tinhTrangBaiViet.ten.required' => 'Tên là trường bắt buộc.',
        'tinhTrangBaiViet.ten.max' => 'Tên không được vượt quá 255.',
        'tinhTrangBaiViet.mo_ta.max' => 'Mô tả không được vượt quá 500.'
        // end_messages
      ];
    }
}
