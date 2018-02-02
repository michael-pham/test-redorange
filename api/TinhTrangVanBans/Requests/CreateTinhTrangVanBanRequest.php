<?php

namespace Api\TinhTrangVanBans\Requests;

use Infrastructure\Http\ApiRequest;

class CreateTinhTrangVanBanRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'tinhTrangVanBan' => 'array|required',
'tinhTrangVanBan.ten' => 'required|unique:tinh_trang_van_bans,ten|string|max:200|min:1'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'tinhTrangVanBan.ten.required' => 'Tên tình trạng văn bản là trường bắt buộc.',
        'tinhTrangVanBan.ten.unique' => 'Tên tình trạng văn bản đã tồn tại.',
        'tinhTrangVanBan.ten.max' => 'Tên tình trạng văn bản không được vượt quá 200.',
        'tinhTrangVanBan.ten.min' => 'Tên tình trạng văn bản không được nhỏ hơn 1.'
        // end_messages
      ];
    }
}
