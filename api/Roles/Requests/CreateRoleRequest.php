<?php

namespace Api\Roles\Requests;

use Infrastructure\Http\ApiRequest;

class CreateRoleRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'role' => 'array|required',
'role.name' => 'required|unique:roles,name|string|max:255',
'role.display_name' => 'nullable|string|max:255',
'role.description' => 'nullable|string|max:255'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'role.name.required' => 'name là trường bắt buộc.',
        'role.name.unique' => 'name đã tồn tại.',
        'role.name.max' => 'name không được vượt quá 255.',
        'role.display_name.max' => 'display name không được vượt quá 255.',
        'role.description.max' => 'description không được vượt quá 255.'
        // end_messages
      ];
    }
}
