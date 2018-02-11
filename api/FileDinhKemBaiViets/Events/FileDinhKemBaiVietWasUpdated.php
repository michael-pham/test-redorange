<?php

namespace Api\FileDinhKemBaiViets\Events;

use Infrastructure\Events\Event;
use Api\FileDinhKemBaiViets\Models\FileDinhKemBaiViet;

class FileDinhKemBaiVietWasUpdated extends Event
{
  public $fileDinhKemBaiViet;

  public function __construct(FileDinhKemBaiViet $fileDinhKemBaiViet)
  {
    $this->fileDinhKemBaiViet = $fileDinhKemBaiViet;
    }
}
