<?php

namespace Api\Projects;

use Infrastructure\Events\EventServiceProvider;
use Api\Projects\Events\ProjectWasCreated;
use Api\Projects\Events\ProjectWasDeleted;
use Api\Projects\Events\ProjectWasUpdated;

class ProjectServiceProvider extends EventServiceProvider
{
  protected $listen = [
    ProjectWasCreated::class => [
      // listeners for when a project is created
    ],
    ProjectWasDeleted::class => [
      // listeners for when a project is deleted
    ],
    ProjectWasUpdated::class => [
      // listeners for when a project is updated
    ]
  ];
}
