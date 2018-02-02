<?php

namespace Api\DuLieuDangKys\Models;

use Illuminate\Database\Eloquent\Model;

class DuLieuDangKy extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"user_id","bieu_mau_chung_tu_id","json_data"
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

public function user()
{
    return $this->belongsTo('Api\Users\Models\User');
}

// end_relationships
}
