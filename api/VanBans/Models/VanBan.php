<?php

namespace Api\VanBans\Models;

use Illuminate\Database\Eloquent\Model;

class VanBan extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"ten","loai_van_ban_id","tinh_trang_van_ban_id","file_uri","co_quan_ban_hanh_id","ngay_ban_hanh","ngay_co_hieu_luc","so_luong_bang_in_cho_phep","so_lan_in","mo_ta","so_ky_hieu","con_hieu_luc","ngay_het_hieu_luc","pham_vi_van_ban_id","nganh_id","linh_vuc_van_ban_id", "file_id"
// end_fillable
  ];

  /**
   * The attributes that should be hidden for arrays.
   *
   * @var array
   */
  protected $hidden = [
// start_hidden
// REPLACEMENT
// end_hidden
  ];

  // start_relationships
  public function loaiVanBan()
  {
      return $this->belongsTo('Api\LoaiVanBans\Models\LoaiVanBan');
  }

  public function coQuanBanHanh()
  {
      return $this->belongsTo('Api\CoQuanBanHanhs\Models\CoQuanBanHanh');
  }

  public function linhVucVanBan()
  {
      return $this->belongsTo('Api\LinhVucVanBans\Models\LinhVucVanBan');
  }
// end_relationships
}
