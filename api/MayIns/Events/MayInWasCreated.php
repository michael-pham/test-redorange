<?php

namespace Api\MayIns\Events;

use Infrastructure\Events\Event;
use Api\MayIns\Models\MayIn;

class MayInWasCreated extends Event
{
  public $mayIn;

  public function __construct(MayIn $mayIn)
  {
    $this->mayIn = $mayIn;
    }
}
