<?php

namespace Api\BaiViets\Models;

use Illuminate\Database\Eloquent\Model;

class BaiViet extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"tac_gia_bai_viet_id","noi_dung","tieu_de","trich_yeu","tinh_trang_bai_viet_id","tinh_trang_binh_luan_id","bai_viet_cha_id","thu_tu_tren_menu","chung_loai_bai_viet_id","so_luong_binh_luan","hinh_anh_dai_dien_url","hinh_anh_dai_dien_thumbnail_url"
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

// end_relationships
}
