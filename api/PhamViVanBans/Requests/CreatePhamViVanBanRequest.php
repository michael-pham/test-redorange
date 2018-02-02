<?php

namespace Api\PhamViVanBans\Requests;

use Infrastructure\Http\ApiRequest;

class CreatePhamViVanBanRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'phamViVanBan' => 'array|required',
'phamViVanBan.ten' => 'required|unique:pham_vi_van_bans,ten|string|max:200|min:1'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'phamViVanBan.ten.required' => 'Tên phạm vi văn bản là trường bắt buộc.',
        'phamViVanBan.ten.unique' => 'Tên phạm vi văn bản đã tồn tại.',
        'phamViVanBan.ten.max' => 'Tên phạm vi văn bản không được vượt quá 200.',
        'phamViVanBan.ten.min' => 'Tên phạm vi văn bản không được nhỏ hơn 1.'
        // end_messages
      ];
    }
}
