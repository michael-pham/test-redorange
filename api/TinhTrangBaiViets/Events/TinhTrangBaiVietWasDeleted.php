<?php

namespace Api\TinhTrangBaiViets\Events;

use Infrastructure\Events\Event;
use Api\TinhTrangBaiViets\Models\TinhTrangBaiViet;

class TinhTrangBaiVietWasDeleted extends Event
{
  public $tinhTrangBaiViet;

  public function __construct(TinhTrangBaiViet $tinhTrangBaiViet)
  {
    $this->tinhTrangBaiViet = $tinhTrangBaiViet;
    }
}
