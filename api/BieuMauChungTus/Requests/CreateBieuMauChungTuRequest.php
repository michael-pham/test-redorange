<?php

namespace Api\BieuMauChungTus\Requests;

use Infrastructure\Http\ApiRequest;

class CreateBieuMauChungTuRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'bieuMauChungTu' => 'array|required',
'bieuMauChungTu.ten' => 'required|unique:bieu_mau_chung_tus,ten|string|max:200|min:1',
'bieuMauChungTu.so_ky_hieu' => 'nullable|string|max:200|min:1',
'bieuMauChungTu.image_uri' => 'nullable|unique:bieu_mau_chung_tus,image_uri|string|max:1000|min:1',
'bieuMauChungTu.image_id' => 'nullable|numeric',
'bieuMauChungTu.may_in_id' => 'nullable|numeric',
'bieuMauChungTu.page_size_id' => 'nullable|numeric'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'bieuMauChungTu.ten.required' => 'Tên biểu mẫu chứng từ là trường bắt buộc.',
        'bieuMauChungTu.ten.unique' => 'Tên biểu mẫu chứng từ đã tồn tại.',
        'bieuMauChungTu.ten.max' => 'Tên biểu mẫu chứng từ không được vượt quá 200.',
        'bieuMauChungTu.ten.min' => 'Tên biểu mẫu chứng từ không được nhỏ hơn 1.',
        'bieuMauChungTu.so_ky_hieu.max' => 'Số ký hiệu không được vượt quá 200.',
        'bieuMauChungTu.so_ky_hieu.min' => 'Số ký hiệu không được nhỏ hơn 1.',
        'bieuMauChungTu.bieu_mau_uri.unique' => 'Uri biểu mẫu đã tồn tại.',
        'bieuMauChungTu.bieu_mau_uri.max' => 'Uri biểu mẫu không được vượt quá 1000.',
        'bieuMauChungTu.bieu_mau_uri.min' => 'Uri biểu mẫu không được nhỏ hơn 1.',
        'bieuMauChungTu.may_in_id.numeric' => 'Id máy in phải là một số'
        // end_messages
      ];
    }
}
