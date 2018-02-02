<?php

namespace Api\Roles\Requests;

use Infrastructure\Http\ApiRequest;

class AssignPermissionsRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'permissions_ids' => 'array',
'role_id' => 'required|numeric'
// end_rules
      ];
    }

    public function messages()
    {
      return [
      ];
    }
}
