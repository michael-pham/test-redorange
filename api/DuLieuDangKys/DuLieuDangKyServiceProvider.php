<?php

namespace Api\DuLieuDangKys;

use Infrastructure\Events\EventServiceProvider;
use Api\DuLieuDangKys\Events\DuLieuDangKyWasCreated;
use Api\DuLieuDangKys\Events\DuLieuDangKyWasDeleted;
use Api\DuLieuDangKys\Events\DuLieuDangKyWasUpdated;

class DuLieuDangKyServiceProvider extends EventServiceProvider
{
  protected $listen = [
    DuLieuDangKyWasCreated::class => [
      // listeners for when a duLieuDangKy is created
    ],
    DuLieuDangKyWasDeleted::class => [
      // listeners for when a duLieuDangKy is deleted
    ],
    DuLieuDangKyWasUpdated::class => [
      // listeners for when a duLieuDangKy is updated
    ]
  ];
}
