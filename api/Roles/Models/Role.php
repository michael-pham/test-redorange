<?php

namespace Api\Roles\Models;
use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
    // start_fillable
    "name","display_name","description"
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

  public function permissions()
  {
      return $this->belongsToMany('Api\Permissions\Models\Permission');
  }

// start_relationships

// end_relationships
}
