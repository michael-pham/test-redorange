<?php

namespace Api\BaiViets;

use Infrastructure\Events\EventServiceProvider;
use Api\BaiViets\Events\BaiVietWasCreated;
use Api\BaiViets\Events\BaiVietWasDeleted;
use Api\BaiViets\Events\BaiVietWasUpdated;

class BaiVietServiceProvider extends EventServiceProvider
{
  protected $listen = [
    BaiVietWasCreated::class => [
      // listeners for when a baiViet is created
    ],
    BaiVietWasDeleted::class => [
      // listeners for when a baiViet is deleted
    ],
    BaiVietWasUpdated::class => [
      // listeners for when a baiViet is updated
    ]
  ];
}
