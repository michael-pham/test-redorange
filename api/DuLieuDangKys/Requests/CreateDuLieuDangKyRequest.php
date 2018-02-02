<?php

namespace Api\DuLieuDangKys\Requests;

use Infrastructure\Http\ApiRequest;

class CreateDuLieuDangKyRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'duLieuDangKy' => 'array|required',
'duLieuDangKy.user_id' => 'required|numeric',
'duLieuDangKy.bieu_mau_chung_tu_id' => 'required|numeric',
'duLieuDangKy.json_data' => 'required|string'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'duLieuDangKy.user_id.required' => 'Id người sử dụng là trường bắt buộc.',
        'duLieuDangKy.user_id.numeric' => 'Id người sử dụng phải là một số',
        'duLieuDangKy.bieu_mau_chung_tu_id.required' => 'Id biểu mẫu chứng từ là trường bắt buộc.',
        'duLieuDangKy.bieu_mau_chung_tu_id.numeric' => 'Id biểu mẫu chứng từ phải là một số',
        'duLieuDangKy.json_data.required' => 'Dữ liệu json là trường bắt buộc.'
        // end_messages
      ];
    }
}
