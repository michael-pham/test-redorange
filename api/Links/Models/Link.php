<?php

namespace Api\Links\Models;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"link_url","link_name","link_image","link_target_id","link_description","link_visible","link_owner","link_click_count"
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
