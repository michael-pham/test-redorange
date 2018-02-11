<?php

namespace Api\LinkTargets\Requests;

use Infrastructure\Http\ApiRequest;

class CreateLinkTargetRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'linkTarget' => 'array|required',
'linkTarget.name' => 'required|string|max:255',
'linkTarget.description' => 'nullable|string'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'linkTarget.name.required' => 'Tên là trường bắt buộc.',
        'linkTarget.name.max' => 'Tên không được vượt quá 255.'
        // end_messages
      ];
    }
}
