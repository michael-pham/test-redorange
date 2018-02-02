<?php

namespace Api\ModelNames;

use Infrastructure\Events\EventServiceProvider;
use Api\ModelNames\Events\ModelNameWasCreated;
use Api\ModelNames\Events\ModelNameWasDeleted;
use Api\ModelNames\Events\ModelNameWasUpdated;

class ModelNameServiceProvider extends EventServiceProvider
{
  protected $listen = [
    ModelNameWasCreated::class => [
      // listeners for when a modelName is created
    ],
    ModelNameWasDeleted::class => [
      // listeners for when a modelName is deleted
    ],
    ModelNameWasUpdated::class => [
      // listeners for when a modelName is updated
    ]
  ];
}
