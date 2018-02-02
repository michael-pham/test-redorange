<?php

namespace Api\LoaiVanBans\Models;

use Illuminate\Database\Eloquent\Model;

class LoaiVanBan extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"ten"
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
