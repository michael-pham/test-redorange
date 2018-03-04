<?php

namespace Api\LoaiBaiViets\Events;

use Infrastructure\Events\Event;
use Api\LoaiBaiViets\Models\LoaiBaiViet;

class LoaiBaiVietWasUpdated extends Event
{
  public $loaiBaiViet;

  public function __construct(LoaiBaiViet $loaiBaiViet)
  {
    $this->loaiBaiViet = $loaiBaiViet;
    }
}
