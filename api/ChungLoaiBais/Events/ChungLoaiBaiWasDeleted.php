<?php

namespace Api\ChungLoaiBais\Events;

use Infrastructure\Events\Event;
use Api\ChungLoaiBais\Models\ChungLoaiBai;

class ChungLoaiBaiWasDeleted extends Event
{
  public $chungLoaiBai;

  public function __construct(ChungLoaiBai $chungLoaiBai)
  {
    $this->chungLoaiBai = $chungLoaiBai;
    }
}
