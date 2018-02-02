<?php

namespace Api\TruongDuLieus;

use Infrastructure\Events\EventServiceProvider;
use Api\TruongDuLieus\Events\TruongDuLieuWasCreated;
use Api\TruongDuLieus\Events\TruongDuLieuWasDeleted;
use Api\TruongDuLieus\Events\TruongDuLieuWasUpdated;

class TruongDuLieuServiceProvider extends EventServiceProvider
{
  protected $listen = [
    TruongDuLieuWasCreated::class => [
      // listeners for when a truongDuLieu is created
    ],
    TruongDuLieuWasDeleted::class => [
      // listeners for when a truongDuLieu is deleted
    ],
    TruongDuLieuWasUpdated::class => [
      // listeners for when a truongDuLieu is updated
    ]
  ];
}
