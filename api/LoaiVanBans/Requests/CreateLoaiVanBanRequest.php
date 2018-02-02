<?php

namespace Api\LoaiVanBans\Requests;

use Infrastructure\Http\ApiRequest;

class CreateLoaiVanBanRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'loaiVanBan' => 'array|required',
'loaiVanBan.ten' => 'required|unique:loai_van_bans,ten|string|max:200|min:1'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'loaiVanBan.ten.required' => 'Tên loại văn bản là trường bắt buộc.',
        'loaiVanBan.ten.unique' => 'Tên loại văn bản đã tồn tại.',
        'loaiVanBan.ten.max' => 'Tên loại văn bản không được vượt quá 200.',
        'loaiVanBan.ten.min' => 'Tên loại văn bản không được nhỏ hơn 1.'
        // end_messages
      ];
    }
}
