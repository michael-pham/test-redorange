<?php

namespace Api\VanBans;

use Infrastructure\Events\EventServiceProvider;
use Api\VanBans\Events\VanBanWasCreated;
use Api\VanBans\Events\VanBanWasDeleted;
use Api\VanBans\Events\VanBanWasUpdated;

class VanBanServiceProvider extends EventServiceProvider
{
  protected $listen = [
    VanBanWasCreated::class => [
      // listeners for when a vanBan is created
    ],
    VanBanWasDeleted::class => [
      // listeners for when a vanBan is deleted
    ],
    VanBanWasUpdated::class => [
      // listeners for when a vanBan is updated
    ]
  ];
}
