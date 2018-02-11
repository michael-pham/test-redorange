<?php

namespace Api\LinkTargets\Events;

use Infrastructure\Events\Event;
use Api\LinkTargets\Models\LinkTarget;

class LinkTargetWasCreated extends Event
{
  public $linkTarget;

  public function __construct(LinkTarget $linkTarget)
  {
    $this->linkTarget = $linkTarget;
    }
}
