<?php

namespace Api\BaiViets\Events;

use Infrastructure\Events\Event;
use Api\BaiViets\Models\BaiViet;

class BaiVietWasUpdated extends Event
{
  public $baiViet;

  public function __construct(BaiViet $baiViet)
  {
    $this->baiViet = $baiViet;
    }
}
