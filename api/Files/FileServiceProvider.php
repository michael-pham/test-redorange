<?php

namespace Api\Files;

use Infrastructure\Events\EventServiceProvider;
use Api\Files\Events\FileWasCreated;
use Api\Files\Events\FileWasDeleted;
use Api\Files\Events\FileWasUpdated;

class FileServiceProvider extends EventServiceProvider
{
  protected $listen = [
    FileWasCreated::class => [
      // listeners for when a file is created
    ],
    FileWasDeleted::class => [
      // listeners for when a file is deleted
    ],
    FileWasUpdated::class => [
      // listeners for when a file is updated
    ]
  ];
}
