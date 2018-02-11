<?php

namespace Api\LinkTargets;

use Infrastructure\Events\EventServiceProvider;
use Api\LinkTargets\Events\LinkTargetWasCreated;
use Api\LinkTargets\Events\LinkTargetWasDeleted;
use Api\LinkTargets\Events\LinkTargetWasUpdated;

class LinkTargetServiceProvider extends EventServiceProvider
{
  protected $listen = [
    LinkTargetWasCreated::class => [
      // listeners for when a linkTarget is created
    ],
    LinkTargetWasDeleted::class => [
      // listeners for when a linkTarget is deleted
    ],
    LinkTargetWasUpdated::class => [
      // listeners for when a linkTarget is updated
    ]
  ];
}
