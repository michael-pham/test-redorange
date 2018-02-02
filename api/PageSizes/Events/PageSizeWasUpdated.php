<?php

namespace Api\PageSizes\Events;

use Infrastructure\Events\Event;
use Api\PageSizes\Models\PageSize;

class PageSizeWasUpdated extends Event
{
  public $pageSize;

  public function __construct(PageSize $pageSize)
  {
    $this->pageSize = $pageSize;
    }
}
