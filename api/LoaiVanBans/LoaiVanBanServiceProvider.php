<?php

namespace Api\LoaiVanBans;

use Infrastructure\Events\EventServiceProvider;
use Api\LoaiVanBans\Events\LoaiVanBanWasCreated;
use Api\LoaiVanBans\Events\LoaiVanBanWasDeleted;
use Api\LoaiVanBans\Events\LoaiVanBanWasUpdated;

class LoaiVanBanServiceProvider extends EventServiceProvider
{
  protected $listen = [
    LoaiVanBanWasCreated::class => [
      // listeners for when a loaiVanBan is created
    ],
    LoaiVanBanWasDeleted::class => [
      // listeners for when a loaiVanBan is deleted
    ],
    LoaiVanBanWasUpdated::class => [
      // listeners for when a loaiVanBan is updated
    ]
  ];
}
