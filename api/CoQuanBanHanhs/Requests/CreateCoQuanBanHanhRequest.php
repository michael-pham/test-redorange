<?php

namespace Api\CoQuanBanHanhs\Requests;

use Infrastructure\Http\ApiRequest;

class CreateCoQuanBanHanhRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'coQuanBanHanh' => 'array|required',
'coQuanBanHanh.ten' => 'required|unique:co_quan_ban_hanhs,ten|string|max:200|min:1',
'coQuanBanHanh.ten_viet_tat' => 'required|unique:co_quan_ban_hanhs,ten_viet_tat|string|max:200|min:1'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'coQuanBanHanh.ten.required' => 'Tên cơ quan ban hành là trường bắt buộc.',
        'coQuanBanHanh.ten.unique' => 'Tên cơ quan ban hành đã tồn tại.',
        'coQuanBanHanh.ten.max' => 'Tên cơ quan ban hành không được vượt quá 200.',
        'coQuanBanHanh.ten.min' => 'Tên cơ quan ban hành không được nhỏ hơn 1.',
        'coQuanBanHanh.ten_viet_tat.required' => 'Tên viết tắt là trường bắt buộc.',
        'coQuanBanHanh.ten_viet_tat.unique' => 'Tên viết tắt đã tồn tại.',
        'coQuanBanHanh.ten_viet_tat.max' => 'Tên viết tắt không được vượt quá 200.',
        'coQuanBanHanh.ten_viet_tat.min' => 'Tên viết tắt không được nhỏ hơn 1.'
        // end_messages
      ];
    }
}
