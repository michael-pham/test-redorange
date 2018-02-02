<?php

namespace Api\MayIns;

use Infrastructure\Events\EventServiceProvider;
use Api\MayIns\Events\MayInWasCreated;
use Api\MayIns\Events\MayInWasDeleted;
use Api\MayIns\Events\MayInWasUpdated;

class MayInServiceProvider extends EventServiceProvider
{
  protected $listen = [
    MayInWasCreated::class => [
      // listeners for when a mayIn is created
    ],
    MayInWasDeleted::class => [
      // listeners for when a mayIn is deleted
    ],
    MayInWasUpdated::class => [
      // listeners for when a mayIn is updated
    ]
  ];
}
