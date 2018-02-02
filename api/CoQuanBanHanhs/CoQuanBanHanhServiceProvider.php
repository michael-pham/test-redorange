<?php

namespace Api\CoQuanBanHanhs;

use Infrastructure\Events\EventServiceProvider;
use Api\CoQuanBanHanhs\Events\CoQuanBanHanhWasCreated;
use Api\CoQuanBanHanhs\Events\CoQuanBanHanhWasDeleted;
use Api\CoQuanBanHanhs\Events\CoQuanBanHanhWasUpdated;

class CoQuanBanHanhServiceProvider extends EventServiceProvider
{
  protected $listen = [
    CoQuanBanHanhWasCreated::class => [
      // listeners for when a coQuanBanHanh is created
    ],
    CoQuanBanHanhWasDeleted::class => [
      // listeners for when a coQuanBanHanh is deleted
    ],
    CoQuanBanHanhWasUpdated::class => [
      // listeners for when a coQuanBanHanh is updated
    ]
  ];
}
