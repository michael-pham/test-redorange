<?php

namespace Api\LinhVucVanBans\Events;

use Infrastructure\Events\Event;
use Api\LinhVucVanBans\Models\LinhVucVanBan;

class LinhVucVanBanWasCreated extends Event
{
  public $linhVucVanBan;

  public function __construct(LinhVucVanBan $linhVucVanBan)
  {
    $this->linhVucVanBan = $linhVucVanBan;
    }
}
