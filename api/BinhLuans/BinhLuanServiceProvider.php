<?php

namespace Api\BinhLuans;

use Infrastructure\Events\EventServiceProvider;
use Api\BinhLuans\Events\BinhLuanWasCreated;
use Api\BinhLuans\Events\BinhLuanWasDeleted;
use Api\BinhLuans\Events\BinhLuanWasUpdated;

class BinhLuanServiceProvider extends EventServiceProvider
{
  protected $listen = [
    BinhLuanWasCreated::class => [
      // listeners for when a binhLuan is created
    ],
    BinhLuanWasDeleted::class => [
      // listeners for when a binhLuan is deleted
    ],
    BinhLuanWasUpdated::class => [
      // listeners for when a binhLuan is updated
    ]
  ];
}
