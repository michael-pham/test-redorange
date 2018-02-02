<?php

namespace Api\TruongDuLieus\Models;

use Illuminate\Database\Eloquent\Model;

class TruongDuLieu extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"ten","ky_hieu","bieu_mau_chung_tu_id", "le_tren", "le_trai", "font_size", "font_style", "font_family"
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
public function bieuMauChungTu()
{
    return $this->belongsTo('Api\BieuMauChungTus\Models\BieuMauChungTu');
}

// end_relationships
}
