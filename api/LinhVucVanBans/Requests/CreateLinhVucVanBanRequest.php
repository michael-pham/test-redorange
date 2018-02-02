<?php

namespace Api\LinhVucVanBans\Requests;

use Infrastructure\Http\ApiRequest;

class CreateLinhVucVanBanRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'linhVucVanBan' => 'array|required',
'linhVucVanBan.ten' => 'required|unique:linh_vuc_van_bans,ten|string|max:200|min:1'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'linhVucVanBan.ten.required' => 'Tên lĩnh vực văn bản là trường bắt buộc.',
        'linhVucVanBan.ten.unique' => 'Tên lĩnh vực văn bản đã tồn tại.',
        'linhVucVanBan.ten.max' => 'Tên lĩnh vực văn bản không được vượt quá 200.',
        'linhVucVanBan.ten.min' => 'Tên lĩnh vực văn bản không được nhỏ hơn 1.'
        // end_messages
      ];
    }
}
