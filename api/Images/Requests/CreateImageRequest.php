<?php

namespace Api\Images\Requests;

use Infrastructure\Http\ApiRequest;

class CreateImageRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'image' => 'array|required',
'image.image_uri' => 'required|string'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'image.image_uri.required' => 'Đường dẫn đến hình ảnh là trường bắt buộc.'
        // end_messages
      ];
    }
}
