<?php

namespace Api\CoQuanBanHanhs\Models;

use Illuminate\Database\Eloquent\Model;

class CoQuanBanHanh extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"ten","ten_viet_tat"
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
public function vanBans()
{
    return $this->hasMany('Api\VanBans\Models\VanBan');
}

// end_relationships
}
