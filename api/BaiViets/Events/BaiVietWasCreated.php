<?php

namespace Api\BaiViets\Events;

use Infrastructure\Events\Event;
use Api\BaiViets\Models\BaiViet;

class BaiVietWasCreated extends Event
{
  public $baiViet;

  public function __construct(BaiViet $baiViet)
  {
    $this->baiViet = $baiViet;
    }
}
