<?php

namespace Api\BinhLuans\Models;

use Illuminate\Database\Eloquent\Model;

class BinhLuan extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"bai_viet_id","nguoi_binh_luan_id","ten_nguoi_binh_luan","url_nguoi_binh_luan","ip_nguoi_binh_luan","noi_dung_binh_luan","binh_luan_cha_id","binh_luan_duoc_chap_nhan"
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
