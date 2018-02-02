<?php

namespace Api\TruongDuLieus\Events;

use Infrastructure\Events\Event;
use Api\TruongDuLieus\Models\TruongDuLieu;

class TruongDuLieuWasUpdated extends Event
{
  public $truongDuLieu;

  public function __construct(TruongDuLieu $truongDuLieu)
  {
    $this->truongDuLieu = $truongDuLieu;
    }
}
