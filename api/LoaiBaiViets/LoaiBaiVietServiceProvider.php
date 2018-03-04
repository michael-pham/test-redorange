<?php

namespace Api\LoaiBaiViets;

use Infrastructure\Events\EventServiceProvider;
use Api\LoaiBaiViets\Events\LoaiBaiVietWasCreated;
use Api\LoaiBaiViets\Events\LoaiBaiVietWasDeleted;
use Api\LoaiBaiViets\Events\LoaiBaiVietWasUpdated;

class LoaiBaiVietServiceProvider extends EventServiceProvider
{
  protected $listen = [
    LoaiBaiVietWasCreated::class => [
      // listeners for when a loaiBaiViet is created
    ],
    LoaiBaiVietWasDeleted::class => [
      // listeners for when a loaiBaiViet is deleted
    ],
    LoaiBaiVietWasUpdated::class => [
      // listeners for when a loaiBaiViet is updated
    ]
  ];
}
