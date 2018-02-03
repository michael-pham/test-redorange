<?php

namespace Api\Projects\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    // start_fillable
    "name","generating_data", "generating_data_refined"
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
