<?php

namespace Api\Nganhs\Events;

use Infrastructure\Events\Event;
use Api\Nganhs\Models\Nganh;

class NganhWasUpdated extends Event
{
  public $nganh;

  public function __construct(Nganh $nganh)
  {
    $this->nganh = $nganh;
    }
}
