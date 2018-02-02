<?php

namespace Api\VanBans\Events;

use Infrastructure\Events\Event;
use Api\VanBans\Models\VanBan;

class VanBanWasCreated extends Event
{
  public $vanBan;

  public function __construct(VanBan $vanBan)
  {
    $this->vanBan = $vanBan;
    }
}