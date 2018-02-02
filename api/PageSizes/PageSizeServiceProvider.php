<?php

namespace Api\PageSizes;

use Infrastructure\Events\EventServiceProvider;
use Api\PageSizes\Events\PageSizeWasCreated;
use Api\PageSizes\Events\PageSizeWasDeleted;
use Api\PageSizes\Events\PageSizeWasUpdated;

class PageSizeServiceProvider extends EventServiceProvider
{
  protected $listen = [
    PageSizeWasCreated::class => [
      // listeners for when a pageSize is created
    ],
    PageSizeWasDeleted::class => [
      // listeners for when a pageSize is deleted
    ],
    PageSizeWasUpdated::class => [
      // listeners for when a pageSize is updated
    ]
  ];
}
