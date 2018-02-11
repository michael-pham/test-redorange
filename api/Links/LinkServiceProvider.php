<?php

namespace Api\Links;

use Infrastructure\Events\EventServiceProvider;
use Api\Links\Events\LinkWasCreated;
use Api\Links\Events\LinkWasDeleted;
use Api\Links\Events\LinkWasUpdated;

class LinkServiceProvider extends EventServiceProvider
{
  protected $listen = [
    LinkWasCreated::class => [
      // listeners for when a link is created
    ],
    LinkWasDeleted::class => [
      // listeners for when a link is deleted
    ],
    LinkWasUpdated::class => [
      // listeners for when a link is updated
    ]
  ];
}
