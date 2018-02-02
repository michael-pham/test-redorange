<?php

namespace Api\FontFamilys\Requests;

use Infrastructure\Http\ApiRequest;

class CreateFontFamilyRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'fontFamily' => 'array|required',
'fontFamily.font_name' => 'required|string|max:500',
'fontFamily.italics_font_uri' => 'required|string|max:500',
'fontFamily.normal_font_uri' => 'required|string|max:500',
'fontFamily.bold_font_uri' => 'required|string|max:500',
'fontFamily.bold_italics_font_uri' => 'required|string|max:500'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'fontFamily.font_name.required' => 'Tên font là trường bắt buộc.',
        'fontFamily.font_name.max' => 'Tên font không được vượt quá 500.',
        'fontFamily.italics_font_uri.required' => 'Đường dẫn đến font chữ nghiêng là trường bắt buộc.',
        'fontFamily.italics_font_uri.max' => 'Đường dẫn đến font chữ nghiêng không được vượt quá 500.',
        'fontFamily.normal_font_uri.required' => 'Đường dẫn đến font bình thường là trường bắt buộc.',
        'fontFamily.normal_font_uri.max' => 'Đường dẫn đến font bình thường không được vượt quá 500.',
        'fontFamily.bold_font_uri.required' => 'Đường dẫn đến font chữ đậm là trường bắt buộc.',
        'fontFamily.bold_font_uri.max' => 'Đường dẫn đến font chữ đậm không được vượt quá 500.',
        'fontFamily.bold_italics_font_uri.required' => 'Đường dẫn đến font đậm nghiêng là trường bắt buộc.',
        'fontFamily.bold_italics_font_uri.max' => 'Đường dẫn đến font đậm nghiêng không được vượt quá 500.'
        // end_messages
      ];
    }
}
