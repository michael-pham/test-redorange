<?php

namespace Api\TinhTrangBinhLuans\Events;

use Infrastructure\Events\Event;
use Api\TinhTrangBinhLuans\Models\TinhTrangBinhLuan;

class TinhTrangBinhLuanWasCreated extends Event
{
  public $tinhTrangBinhLuan;

  public function __construct(TinhTrangBinhLuan $tinhTrangBinhLuan)
  {
    $this->tinhTrangBinhLuan = $tinhTrangBinhLuan;
    }
}
