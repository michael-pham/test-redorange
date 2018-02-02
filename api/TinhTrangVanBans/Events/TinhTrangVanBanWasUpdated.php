<?php

namespace Api\TinhTrangVanBans\Events;

use Infrastructure\Events\Event;
use Api\TinhTrangVanBans\Models\TinhTrangVanBan;

class TinhTrangVanBanWasUpdated extends Event
{
  public $tinhTrangVanBan;

  public function __construct(TinhTrangVanBan $tinhTrangVanBan)
  {
    $this->tinhTrangVanBan = $tinhTrangVanBan;
    }
}
