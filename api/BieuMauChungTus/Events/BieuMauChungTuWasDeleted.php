<?php

namespace Api\BieuMauChungTus\Events;

use Infrastructure\Events\Event;
use Api\BieuMauChungTus\Models\BieuMauChungTu;

class BieuMauChungTuWasDeleted extends Event
{
  public $bieuMauChungTu;

  public function __construct(BieuMauChungTu $bieuMauChungTu)
  {
    $this->bieuMauChungTu = $bieuMauChungTu;
    }
}
