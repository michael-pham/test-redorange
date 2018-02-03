<?php

namespace Api\Projects\Events;

use Infrastructure\Events\Event;
use Api\Projects\Models\Project;

class ProjectWasUpdated extends Event
{
  public $project;

  public function __construct(Project $project)
  {
    $this->project = $project;
    }
}
