<?php

namespace Api\Roles;

use Infrastructure\Events\EventServiceProvider;
use Api\Roles\Events\RoleWasCreated;
use Api\Roles\Events\RoleWasDeleted;
use Api\Roles\Events\RoleWasUpdated;

class RoleServiceProvider extends EventServiceProvider
{
  protected $listen = [
    RoleWasCreated::class => [
      // listeners for when a role is created
    ],
    RoleWasDeleted::class => [
      // listeners for when a role is deleted
    ],
    RoleWasUpdated::class => [
      // listeners for when a role is updated
    ]
  ];
}
