<?php

namespace Api\PhamViVanBans\Events;

use Infrastructure\Events\Event;
use Api\PhamViVanBans\Models\PhamViVanBan;

class PhamViVanBanWasDeleted extends Event
{
  public $phamViVanBan;

  public function __construct(PhamViVanBan $phamViVanBan)
  {
    $this->phamViVanBan = $phamViVanBan;
    }
}
