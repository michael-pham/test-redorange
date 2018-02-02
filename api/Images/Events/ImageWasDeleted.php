<?php

namespace Api\Images\Events;

use Infrastructure\Events\Event;
use Api\Images\Models\Image;

class ImageWasDeleted extends Event
{
  public $image;

  public function __construct(Image $image)
  {
    $this->image = $image;
    }
}
