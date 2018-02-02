<?php

namespace Api\Nganhs\Requests;

use Infrastructure\Http\ApiRequest;

class CreateNganhRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'nganh' => 'array|required',
'nganh.ten' => 'required|unique:nganhs,ten|string|max:200'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'nganh.ten.required' => 'Tên ngành là trường bắt buộc.',
        'nganh.ten.unique' => 'Tên ngành đã tồn tại.',
        'nganh.ten.max' => 'Tên ngành không được vượt quá 200.'
        // end_messages
      ];
    }
}
