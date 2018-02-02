<?php

namespace Api\Images\Events;

use Infrastructure\Events\Event;
use Api\Images\Models\Image;

class ImageWasUpdated extends Event
{
  public $image;

  public function __construct(Image $image)
  {
    $this->image = $image;
    }
}
