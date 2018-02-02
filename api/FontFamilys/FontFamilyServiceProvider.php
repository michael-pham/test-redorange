<?php

namespace Api\FontFamilys;

use Infrastructure\Events\EventServiceProvider;
use Api\FontFamilys\Events\FontFamilyWasCreated;
use Api\FontFamilys\Events\FontFamilyWasDeleted;
use Api\FontFamilys\Events\FontFamilyWasUpdated;

class FontFamilyServiceProvider extends EventServiceProvider
{
  protected $listen = [
    FontFamilyWasCreated::class => [
      // listeners for when a fontFamily is created
    ],
    FontFamilyWasDeleted::class => [
      // listeners for when a fontFamily is deleted
    ],
    FontFamilyWasUpdated::class => [
      // listeners for when a fontFamily is updated
    ]
  ];
}
