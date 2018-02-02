<?php

namespace Api\DuLieuDangKys\Events;

use Infrastructure\Events\Event;
use Api\DuLieuDangKys\Models\DuLieuDangKy;

class DuLieuDangKyWasUpdated extends Event
{
  public $duLieuDangKy;

  public function __construct(DuLieuDangKy $duLieuDangKy)
  {
    $this->duLieuDangKy = $duLieuDangKy;
    }
}
