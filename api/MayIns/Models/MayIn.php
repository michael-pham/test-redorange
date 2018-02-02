<?php

namespace Api\MayIns\Models;

use Illuminate\Database\Eloquent\Model;

class MayIn extends Model
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
public function bieuMauChungTus()
{
    return $this->hasMany('Api\BieuMauChungTus\Models\BieuMauChungTu');
}

// end_relationships
}
