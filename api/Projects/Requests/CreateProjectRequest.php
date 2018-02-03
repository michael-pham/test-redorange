<?php

namespace Api\Projects\Requests;

use Infrastructure\Http\ApiRequest;

class CreateProjectRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'project' => 'array|required',
'project.name' => 'required|string|max:500|min:1',
'project.generating_data' => 'nullable|string',
'project.generating_data_refined' => 'nullable|string'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'project.name.required' => 'name of the project là trường bắt buộc.',
        'project.name.max' => 'name of the project không được vượt quá 500.',
        'project.name.min' => 'name of the project không được nhỏ hơn 1.'
        // end_messages
      ];
    }
}
