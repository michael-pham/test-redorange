<?php

namespace Api\FontFamilys\Events;

use Infrastructure\Events\Event;
use Api\FontFamilys\Models\FontFamily;

class FontFamilyWasDeleted extends Event
{
  public $fontFamily;

  public function __construct(FontFamily $fontFamily)
  {
    $this->fontFamily = $fontFamily;
    }
}
