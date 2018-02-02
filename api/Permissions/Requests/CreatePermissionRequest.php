<?php

namespace Api\Permissions\Requests;

use Infrastructure\Http\ApiRequest;

class CreatePermissionRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'permission' => 'array|required',
'permission.name' => 'required|unique:permissions,name|string|max:255',
'permission.display_name' => 'required|string|max:255',
'permission.description' => 'nullable|string|max:255'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'permission.name.required' => 'name là trường bắt buộc.',
        'permission.name.unique' => 'name đã tồn tại.',
        'permission.name.max' => 'name không được vượt quá 255.',
        'permission.display_name.required' => 'display name là trường bắt buộc.',
        'permission.display_name.max' => 'display name không được vượt quá 255.',
        'permission.description.max' => 'description không được vượt quá 255.'
        // end_messages
      ];
    }
}
