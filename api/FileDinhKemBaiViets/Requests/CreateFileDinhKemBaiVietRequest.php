<?php

namespace Api\FileDinhKemBaiViets\Requests;

use Infrastructure\Http\ApiRequest;

class CreateFileDinhKemBaiVietRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'fileDinhKemBaiViet' => 'array|required',
'fileDinhKemBaiViet.bai_viet_id' => 'required|numeric',
'fileDinhKemBaiViet.ten_file' => 'required|string',
'fileDinhKemBaiViet.file_url' => 'required|string'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'fileDinhKemBaiViet.bai_viet_id.required' => 'ID bài viết là trường bắt buộc.',
        'fileDinhKemBaiViet.bai_viet_id.numeric' => 'ID bài viết phải là một số',
        'fileDinhKemBaiViet.ten_file.required' => 'Tên file là trường bắt buộc.',
        'fileDinhKemBaiViet.file_url.required' => 'Đường dẫn đến file là trường bắt buộc.'
        // end_messages
      ];
    }
}
