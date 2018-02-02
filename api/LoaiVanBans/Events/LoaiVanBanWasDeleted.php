<?php

namespace Api\LoaiVanBans\Events;

use Infrastructure\Events\Event;
use Api\LoaiVanBans\Models\LoaiVanBan;

class LoaiVanBanWasDeleted extends Event
{
  public $loaiVanBan;

  public function __construct(LoaiVanBan $loaiVanBan)
  {
    $this->loaiVanBan = $loaiVanBan;
    }
}
