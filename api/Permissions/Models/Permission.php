<?php

namespace Api\Permissions\Models;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission
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

  // start_relationships

  // end_relationships
}
