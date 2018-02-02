<?php

namespace Api\Images;

use Infrastructure\Events\EventServiceProvider;
use Api\Images\Events\ImageWasCreated;
use Api\Images\Events\ImageWasDeleted;
use Api\Images\Events\ImageWasUpdated;

class ImageServiceProvider extends EventServiceProvider
{
  protected $listen = [
    ImageWasCreated::class => [
      // listeners for when a image is created
    ],
    ImageWasDeleted::class => [
      // listeners for when a image is deleted
    ],
    ImageWasUpdated::class => [
      // listeners for when a image is updated
    ]
  ];
}
