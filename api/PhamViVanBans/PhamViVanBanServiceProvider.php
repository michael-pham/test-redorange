<?php

namespace Api\PhamViVanBans;

use Infrastructure\Events\EventServiceProvider;
use Api\PhamViVanBans\Events\PhamViVanBanWasCreated;
use Api\PhamViVanBans\Events\PhamViVanBanWasDeleted;
use Api\PhamViVanBans\Events\PhamViVanBanWasUpdated;

class PhamViVanBanServiceProvider extends EventServiceProvider
{
  protected $listen = [
    PhamViVanBanWasCreated::class => [
      // listeners for when a phamViVanBan is created
    ],
    PhamViVanBanWasDeleted::class => [
      // listeners for when a phamViVanBan is deleted
    ],
    PhamViVanBanWasUpdated::class => [
      // listeners for when a phamViVanBan is updated
    ]
  ];
}
