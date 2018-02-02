<?php

namespace Api\TinhTrangVanBans;

use Infrastructure\Events\EventServiceProvider;
use Api\TinhTrangVanBans\Events\TinhTrangVanBanWasCreated;
use Api\TinhTrangVanBans\Events\TinhTrangVanBanWasDeleted;
use Api\TinhTrangVanBans\Events\TinhTrangVanBanWasUpdated;

class TinhTrangVanBanServiceProvider extends EventServiceProvider
{
  protected $listen = [
    TinhTrangVanBanWasCreated::class => [
      // listeners for when a tinhTrangVanBan is created
    ],
    TinhTrangVanBanWasDeleted::class => [
      // listeners for when a tinhTrangVanBan is deleted
    ],
    TinhTrangVanBanWasUpdated::class => [
      // listeners for when a tinhTrangVanBan is updated
    ]
  ];
}
