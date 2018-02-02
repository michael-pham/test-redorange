<?php

namespace Api\FontFamilys\Events;

use Infrastructure\Events\Event;
use Api\FontFamilys\Models\FontFamily;

class FontFamilyWasCreated extends Event
{
  public $fontFamily;

  public function __construct(FontFamily $fontFamily)
  {
    $this->fontFamily = $fontFamily;
    }
}