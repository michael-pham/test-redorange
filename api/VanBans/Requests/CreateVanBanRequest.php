<?php

namespace Api\VanBans\Requests;

use Infrastructure\Http\ApiRequest;

class CreateVanBanRequest extends ApiRequest
{
    public function authorize()
    {
      return true;
    }

    public function rules()
    {
      return [
// start_rules
'vanBan' => 'array|required',
'vanBan.ten' => 'required|unique:van_bans,ten|string|max:200|min:1',
'vanBan.loai_van_ban_id' => 'required|numeric',
'vanBan.tinh_trang_van_ban_id' => 'required|numeric',
'vanBan.file_uri' => 'required|nullable|unique:van_bans,file_uri|string|max:1000|min:1',
'vanBan.co_quan_ban_hanh_id' => 'required|numeric',
'vanBan.ngay_ban_hanh' => 'nullable',
'vanBan.ngay_co_hieu_luc' => 'nullable',
'vanBan.so_luong_bang_in_cho_phep' => 'nullable|numeric',
'vanBan.so_lan_in' => 'nullable|numeric',
'vanBan.mo_ta' => 'nullable|string',
'vanBan.so_ky_hieu' => 'required|unique:van_bans,so_ky_hieu|string|max:200|min:1',
'vanBan.con_hieu_luc' => 'boolean',
'vanBan.ngay_het_hieu_luc' => 'required|nullable',
'vanBan.pham_vi_van_ban_id' => 'required|numeric',
'vanBan.nganh_id' => 'nullable|numeric',
'vanBan.linh_vuc_van_ban_id' => 'nullable|numeric',
'vanBan.file_id' => 'numeric'
// end_rules
      ];
    }

    public function messages()
    {
      return [
        // start_messages
        'vanBan.ten.required' => 'Tên văn bản là trường bắt buộc.',
        'vanBan.ten.unique' => 'Tên văn bản đã tồn tại.',
        'vanBan.ten.max' => 'Tên văn bản không được vượt quá 200.',
        'vanBan.ten.min' => 'Tên văn bản không được nhỏ hơn 1.',
        'vanBan.loai_van_ban_id.required' => 'Id loại văn bản là trường bắt buộc.',
        'vanBan.loai_van_ban_id.numeric' => 'Id loại văn bản phải là một số',
        'vanBan.tinh_trang_van_ban_id.required' => 'Tình trạng văn bản là trường bắt buộc.',
        'vanBan.tinh_trang_van_ban_id.numeric' => 'Tình trạng văn bản phải là một số',
        'vanBan.uri.required' => 'Đường dẫn đến văn bản là trường bắt buộc.',
        'vanBan.uri.unique' => 'Đường dẫn đến văn bản đã tồn tại.',
        'vanBan.uri.max' => 'Đường dẫn đến văn bản không được vượt quá 1000.',
        'vanBan.uri.min' => 'Đường dẫn đến văn bản không được nhỏ hơn 1.',
        'vanBan.co_quan_ban_hanh_id.required' => 'Cơ quan ban hành là trường bắt buộc.',
        'vanBan.co_quan_ban_hanh_id.numeric' => 'Cơ quan ban hành phải là một số',
        'vanBan.so_luong_bang_in_cho_phep.numeric' => 'Số lượng bảng in cho phép phải là một số',
        'vanBan.so_lan_in.numeric' => 'Số lần in phải là một số',
        'vanBan.so_ky_hieu.required' => 'Số ký hiệu là trường bắt buộc.',
        'vanBan.so_ky_hieu.unique' => 'Số ký hiệu đã tồn tại.',
        'vanBan.so_ky_hieu.max' => 'Số ký hiệu không được vượt quá 200.',
        'vanBan.so_ky_hieu.min' => 'Số ký hiệu không được nhỏ hơn 1.',
        'vanBan.con_hieu_luc.required' => 'Còn hiệu lực là trường bắt buộc.',
        'vanBan.ngay_het_hieu_luc.required' => 'Ngày hết hiệu lực là trường bắt buộc.',
        'vanBan.pham_vi_van_ban_id.required' => 'Id phạm vi văn bản là trường bắt buộc.',
        'vanBan.pham_vi_van_ban_id.numeric' => 'Id phạm vi văn bản phải là một số',
        'vanBan.nganh_id.numeric' => 'Ngành văn bản phải là một số',
        'vanBan.linh_vuc_id.numeric' => 'Id lĩnh vực văn bản phải là một số'
        // end_messages
      ];
    }
}
