<?php

namespace Api\TinhTrangBaiViets;

use Infrastructure\Events\EventServiceProvider;
use Api\TinhTrangBaiViets\Events\TinhTrangBaiVietWasCreated;
use Api\TinhTrangBaiViets\Events\TinhTrangBaiVietWasDeleted;
use Api\TinhTrangBaiViets\Events\TinhTrangBaiVietWasUpdated;

class TinhTrangBaiVietServiceProvider extends EventServiceProvider
{
  protected $listen = [
    TinhTrangBaiVietWasCreated::class => [
      // listeners for when a tinhTrangBaiViet is created
    ],
    TinhTrangBaiVietWasDeleted::class => [
      // listeners for when a tinhTrangBaiViet is deleted
    ],
    TinhTrangBaiVietWasUpdated::class => [
      // listeners for when a tinhTrangBaiViet is updated
    ]
  ];
}
