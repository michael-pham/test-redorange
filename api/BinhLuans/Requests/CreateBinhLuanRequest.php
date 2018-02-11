<?php

namespace Api\BinhLuans\Requests;

use Infrastructure\Http\ApiRequest;

class CreateBinhLuanRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'binhLuan' => 'array|required',
'binhLuan.bai_viet_id' => 'required|numeric',
'binhLuan.nguoi_binh_luan_id' => 'required|numeric',
'binhLuan.ten_nguoi_binh_luan' => 'nullable|string|max:255',
'binhLuan.url_nguoi_binh_luan' => 'nullable|string|max:255',
'binhLuan.ip_nguoi_binh_luan' => 'nullable|string|max:100',
'binhLuan.noi_dung_binh_luan' => 'required|string',
'binhLuan.binh_luan_cha_id' => 'nullable|numeric',
'binhLuan.binh_luan_duoc_chap_nhan' => 'required'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'binhLuan.bai_viet_id.required' => 'ID bài viết là trường bắt buộc.',
        'binhLuan.bai_viet_id.numeric' => 'ID bài viết phải là một số',
        'binhLuan.nguoi_binh_luan_id.required' => 'ID người bình luận là trường bắt buộc.',
        'binhLuan.nguoi_binh_luan_id.numeric' => 'ID người bình luận phải là một số',
        'binhLuan.ten_nguoi_binh_luan.max' => 'Tên người bình luận không được vượt quá 255.',
        'binhLuan.url_nguoi_binh_luan.max' => 'Đường dẫn đến trang thông tin của người bình luận không được vượt quá 255.',
        'binhLuan.ip_nguoi_binh_luan.max' => 'Địa chỉ ip của người bình luận không được vượt quá 100.',
        'binhLuan.noi_dung_binh_luan.required' => 'Nội dung bình luận là trường bắt buộc.',
        'binhLuan.binh_luan_cha_id.numeric' => 'Bình luận cha phải là một số',
        'binhLuan.binh_luan_duoc_chap_nhan.required' => 'Bình luận được chấp nhận là trường bắt buộc.'
        // end_messages
      ];
    }
}
