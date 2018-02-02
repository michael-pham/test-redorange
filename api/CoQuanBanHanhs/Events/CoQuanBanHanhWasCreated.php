<?php

namespace Api\CoQuanBanHanhs\Events;

use Infrastructure\Events\Event;
use Api\CoQuanBanHanhs\Models\CoQuanBanHanh;

class CoQuanBanHanhWasCreated extends Event
{
  public $coQuanBanHanh;

  public function __construct(CoQuanBanHanh $coQuanBanHanh)
  {
    $this->coQuanBanHanh = $coQuanBanHanh;
    }
}
