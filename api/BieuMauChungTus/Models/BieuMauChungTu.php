<?php

namespace Api\BieuMauChungTus\Models;

use Illuminate\Database\Eloquent\Model;

class BieuMauChungTu extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
  "ten","so_ky_hieu","image_uri","may_in_id", "image_id", "page_size_id"
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
public function mayIn()
{
    return $this->belongsTo('Api\MayIns\Models\MayIn');
}

public function pageSize()
{
    return $this->belongsTo('Api\PageSizes\Models\PageSize');
}

// end_relationships
}
