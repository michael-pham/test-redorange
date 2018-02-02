<?php

namespace Api\PageSizes\Requests;

use Infrastructure\Http\ApiRequest;

class CreatePageSizeRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'pageSize' => 'array|required',
'pageSize.ky_hieu' => 'required|unique:page_sizes,ky_hieu|string|max:200',
'pageSize.width' => 'required|numeric',
'pageSize.height' => 'required|numeric'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'pageSize.ky_hieu.required' => 'Ký hiệu là trường bắt buộc.',
        'pageSize.ky_hieu.unique' => 'Ký hiệu đã tồn tại.',
        'pageSize.ky_hieu.max' => 'Ký hiệu không được vượt quá 200.',
        'pageSize.width.required' => 'Chiều rộng là trường bắt buộc.',
        'pageSize.width.numeric' => 'Chiều rộng phải là một số',
        'pageSize.height.required' => 'Chiều cao là trường bắt buộc.',
        'pageSize.height.numeric' => 'Chiều cao phải là một số'
        // end_messages
      ];
    }
}
