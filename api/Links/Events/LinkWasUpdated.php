<?php

namespace Api\Links\Events;

use Infrastructure\Events\Event;
use Api\Links\Models\Link;

class LinkWasUpdated extends Event
{
  public $link;

  public function __construct(Link $link)
  {
    $this->link = $link;
    }
}
