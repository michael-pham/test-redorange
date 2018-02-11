<?php

namespace Api\ChungLoaiBais;

use Infrastructure\Events\EventServiceProvider;
use Api\ChungLoaiBais\Events\ChungLoaiBaiWasCreated;
use Api\ChungLoaiBais\Events\ChungLoaiBaiWasDeleted;
use Api\ChungLoaiBais\Events\ChungLoaiBaiWasUpdated;

class ChungLoaiBaiServiceProvider extends EventServiceProvider
{
  protected $listen = [
    ChungLoaiBaiWasCreated::class => [
      // listeners for when a chungLoaiBai is created
    ],
    ChungLoaiBaiWasDeleted::class => [
      // listeners for when a chungLoaiBai is deleted
    ],
    ChungLoaiBaiWasUpdated::class => [
      // listeners for when a chungLoaiBai is updated
    ]
  ];
}
