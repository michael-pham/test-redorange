<?php

namespace Api\BaiViets\Requests;

use Infrastructure\Http\ApiRequest;

class CreateBaiVietRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'baiViet' => 'array|required',
'baiViet.tac_gia_bai_viet_id' => 'required|numeric',
'baiViet.noi_dung' => 'required|string',
'baiViet.tieu_de' => 'required|string',
'baiViet.trich_yeu' => 'required|string',
'baiViet.tinh_trang_bai_viet_id' => 'required|numeric',
'baiViet.tinh_trang_binh_luan_id' => 'required|numeric',
'baiViet.bai_viet_cha_id' => 'nullable|numeric',
'baiViet.thu_tu_tren_menu' => 'nullable|numeric',
'baiViet.loai_bai_viet_id' => 'required|numeric',
'baiViet.so_luong_binh_luan' => 'nullable|numeric',
'baiViet.hinh_anh_dai_dien_url' => 'nullable|string',
'baiViet.hinh_anh_dai_dien_thumbnail_url' => 'nullable|string'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'baiViet.tac_gia_bai_viet_id.required' => 'Tác giả là trường bắt buộc.',
        'baiViet.tac_gia_bai_viet_id.numeric' => 'Tác giả phải là một số',
        'baiViet.noi_dung.required' => 'Nội dung là trường bắt buộc.',
        'baiViet.tieu_de.required' => 'Tiêu đề là trường bắt buộc.',
        'baiViet.trich_yeu.required' => 'Trích yếu là trường bắt buộc.',
        'baiViet.tinh_trang_bai_viet_id.required' => 'Tình trạng bài viết là trường bắt buộc.',
        'baiViet.tinh_trang_bai_viet_id.numeric' => 'Tình trạng bài viết phải là một số',
        'baiViet.tinh_trang_binh_luan_id.required' => 'Tình trạng bình luận là trường bắt buộc.',
        'baiViet.tinh_trang_binh_luan_id.numeric' => 'Tình trạng bình luận phải là một số',
        'baiViet.bai_viet_cha_id.numeric' => 'Bài viết cha phải là một số',
        'baiViet.thu_tu_tren_menu.numeric' => 'Thứ tự trên menu phải là một số',
        'baiViet.loai_bai_viet_id.required' => 'Loại bài viết là trường bắt buộc.',
        'baiViet.loai_bai_viet_id.numeric' => 'Loại bài viết phải là một số',
        'baiViet.so_luong_binh_luan.numeric' => 'Số lượng bình lượng phải là một số'
        // end_messages
      ];
    }
}
