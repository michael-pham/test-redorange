<?php

namespace Api\Files\Requests;

use Infrastructure\Http\ApiRequest;

class CreateFileRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
      // start_rules
      'file' => 'array|required',
      'file.file_uri' => 'required|string',
      'file.type' => 'required|string|max:45'
      // end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'file.file_uri.required' => 'Đường dẫn đến hình ảnh là trường bắt buộc.'
        // end_messages
      ];
    }
}
