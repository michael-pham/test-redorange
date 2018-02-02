<?php

namespace Api\TruongDuLieus\Requests;

use Infrastructure\Http\ApiRequest;

class CreateTruongDuLieuRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
        // start_rules
        'truongDuLieu' => 'array|required',
        'truongDuLieu.ten' => 'required|string|max:200|min:1',
        'truongDuLieu.ky_hieu' => 'required|string|max:200',
        'truongDuLieu.bieu_mau_chung_tu_id' => 'required|numeric',
        'truongDuLieu.le_tren' => 'nullable|numeric',
        'truongDuLieu.le_trai' => 'nullable|numeric',
        'truongDuLieu.font_size' => 'required|numeric',
        'truongDuLieu.font_style' => 'required|string',
        'truongDuLieu.font_family' => 'required|string'
        // end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'truongDuLieu.ten.required' => 'Tên trường dữ liệu là trường bắt buộc.',
        'truongDuLieu.ten.max' => 'Tên trường dữ liệu không được vượt quá 200.',
        'truongDuLieu.ten.min' => 'Tên trường dữ liệu không được nhỏ hơn 1.',
        'truongDuLieu.ky_hieu.required' => 'Ký hiệu trường dữ liệu là trường bắt buộc.',
        'truongDuLieu.ky_hieu.max' => 'Ký hiệu trường dữ liệu không được vượt quá 200.',
        'truongDuLieu.bieu_mau_chung_tu_id.required' => 'Id biểu mẫu chứng từ là trường bắt buộc.',
        'truongDuLieu.bieu_mau_chung_tu_id.numeric' => 'Id biểu mẫu chứng từ phải là một số'
        // end_messages
      ];
    }
}
