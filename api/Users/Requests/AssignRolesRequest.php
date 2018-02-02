<?php

namespace Api\Users\Requests;

use Infrastructure\Http\ApiRequest;

class AssignRolesRequest extends ApiRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'role_ids' => 'array',
            'user_id' => 'required|numeric'
        ];
    }

    public function attributes()
    {
        return [
        ];
    }
}
