<?php

namespace Api\BieuMauChungTus;

use Infrastructure\Events\EventServiceProvider;
use Api\BieuMauChungTus\Events\BieuMauChungTuWasCreated;
use Api\BieuMauChungTus\Events\BieuMauChungTuWasDeleted;
use Api\BieuMauChungTus\Events\BieuMauChungTuWasUpdated;

class BieuMauChungTuServiceProvider extends EventServiceProvider
{
  protected $listen = [
    BieuMauChungTuWasCreated::class => [
      // listeners for when a bieuMauChungTu is created
    ],
    BieuMauChungTuWasDeleted::class => [
      // listeners for when a bieuMauChungTu is deleted
    ],
    BieuMauChungTuWasUpdated::class => [
      // listeners for when a bieuMauChungTu is updated
    ]
  ];
}
