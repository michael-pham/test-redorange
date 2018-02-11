<?php

namespace Api\FileDinhKemBaiViets;

use Infrastructure\Events\EventServiceProvider;
use Api\FileDinhKemBaiViets\Events\FileDinhKemBaiVietWasCreated;
use Api\FileDinhKemBaiViets\Events\FileDinhKemBaiVietWasDeleted;
use Api\FileDinhKemBaiViets\Events\FileDinhKemBaiVietWasUpdated;

class FileDinhKemBaiVietServiceProvider extends EventServiceProvider
{
  protected $listen = [
    FileDinhKemBaiVietWasCreated::class => [
      // listeners for when a fileDinhKemBaiViet is created
    ],
    FileDinhKemBaiVietWasDeleted::class => [
      // listeners for when a fileDinhKemBaiViet is deleted
    ],
    FileDinhKemBaiVietWasUpdated::class => [
      // listeners for when a fileDinhKemBaiViet is updated
    ]
  ];
}
