<?php

namespace Api\ModelNames\Events;

use Infrastructure\Events\Event;
use Api\ModelNames\Models\ModelName;

class ModelNameWasUpdated extends Event
{
  public $modelName;

  public function __construct(ModelName $modelName)
  {
    $this->modelName = $modelName;
    }
}
