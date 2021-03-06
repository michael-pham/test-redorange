<?php

namespace Api\BinhLuans\Events;

use Infrastructure\Events\Event;
use Api\BinhLuans\Models\BinhLuan;

class BinhLuanWasDeleted extends Event
{
  public $binhLuan;

  public function __construct(BinhLuan $binhLuan)
  {
    $this->binhLuan = $binhLuan;
    }
}
