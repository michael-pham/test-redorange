<?php

namespace Api\FontFamilys\Models;

use Illuminate\Database\Eloquent\Model;

class FontFamily extends Model
{
  /**
   * The attributes that are mass assignable.
   *
   * @var array
   */
  protected $fillable = [
// start_fillable
"font_name","italics_font_uri","normal_font_uri","bold_font_uri","bold_italics_font_uri"
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
