<?php

namespace Api\Files\Events;

use Infrastructure\Events\Event;
use Api\Files\Models\File;

class FileWasUpdated extends Event
{
  public $file;

  public function __construct(File $file)
  {
    $this->file = $file;
    }
}
