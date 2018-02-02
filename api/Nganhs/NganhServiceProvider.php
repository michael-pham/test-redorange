<?php

namespace Api\Nganhs;

use Infrastructure\Events\EventServiceProvider;
use Api\Nganhs\Events\NganhWasCreated;
use Api\Nganhs\Events\NganhWasDeleted;
use Api\Nganhs\Events\NganhWasUpdated;

class NganhServiceProvider extends EventServiceProvider
{
  protected $listen = [
    NganhWasCreated::class => [
      // listeners for when a nganh is created
    ],
    NganhWasDeleted::class => [
      // listeners for when a nganh is deleted
    ],
    NganhWasUpdated::class => [
      // listeners for when a nganh is updated
    ]
  ];
}
