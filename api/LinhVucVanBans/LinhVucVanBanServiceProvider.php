<?php

namespace Api\LinhVucVanBans;

use Infrastructure\Events\EventServiceProvider;
use Api\LinhVucVanBans\Events\LinhVucVanBanWasCreated;
use Api\LinhVucVanBans\Events\LinhVucVanBanWasDeleted;
use Api\LinhVucVanBans\Events\LinhVucVanBanWasUpdated;

class LinhVucVanBanServiceProvider extends EventServiceProvider
{
  protected $listen = [
    LinhVucVanBanWasCreated::class => [
      // listeners for when a linhVucVanBan is created
    ],
    LinhVucVanBanWasDeleted::class => [
      // listeners for when a linhVucVanBan is deleted
    ],
    LinhVucVanBanWasUpdated::class => [
      // listeners for when a linhVucVanBan is updated
    ]
  ];
}
