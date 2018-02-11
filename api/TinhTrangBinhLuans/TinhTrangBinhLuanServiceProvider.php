<?php

namespace Api\TinhTrangBinhLuans;

use Infrastructure\Events\EventServiceProvider;
use Api\TinhTrangBinhLuans\Events\TinhTrangBinhLuanWasCreated;
use Api\TinhTrangBinhLuans\Events\TinhTrangBinhLuanWasDeleted;
use Api\TinhTrangBinhLuans\Events\TinhTrangBinhLuanWasUpdated;

class TinhTrangBinhLuanServiceProvider extends EventServiceProvider
{
  protected $listen = [
    TinhTrangBinhLuanWasCreated::class => [
      // listeners for when a tinhTrangBinhLuan is created
    ],
    TinhTrangBinhLuanWasDeleted::class => [
      // listeners for when a tinhTrangBinhLuan is deleted
    ],
    TinhTrangBinhLuanWasUpdated::class => [
      // listeners for when a tinhTrangBinhLuan is updated
    ]
  ];
}
