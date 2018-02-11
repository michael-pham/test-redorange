<?php

namespace Api\Links\Requests;

use Infrastructure\Http\ApiRequest;

class CreateLinkRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'link' => 'array|required',
'link.link_url' => 'required|string|max:255',
'link.link_name' => 'required|string|max:255',
'link.link_image' => 'string|max:255',
'link.link_target_id' => 'required|numeric',
'link.link_description' => 'nullable|string|max:255',
'link.link_visible' => 'required',
'link.link_owner' => 'nullable',
'link.link_click_count' => 'nullable|numeric'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'link.link_url.required' => 'Đường dẫn là trường bắt buộc.',
        'link.link_url.max' => 'Đường dẫn không được vượt quá 255.',
        'link.link_name.required' => 'Tên link là trường bắt buộc.',
        'link.link_name.max' => 'Tên link không được vượt quá 255.',
        'link.link_image.max' => 'Hình ảnh đại diện cho đường dẫn không được vượt quá 255.',
        'link.link_target_id.required' => 'ID đối tượng trỏ đến của đường dẫn là trường bắt buộc.',
        'link.link_target_id.numeric' => 'ID đối tượng trỏ đến của đường dẫn phải là một số',
        'link.link_description.max' => 'Mô tả về đường dẫn không được vượt quá 255.',
        'link.link_visible.required' => 'Cho phép hiển thị đường dẫn là trường bắt buộc.',
        'link.link_click_count.numeric' => 'Số click vào đường dẫn phải là một số'
        // end_messages
      ];
    }
}
