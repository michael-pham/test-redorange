<?php

namespace Api\Permissions;

use Infrastructure\Events\EventServiceProvider;
use Api\Permissions\Events\PermissionWasCreated;
use Api\Permissions\Events\PermissionWasDeleted;
use Api\Permissions\Events\PermissionWasUpdated;

class PermissionServiceProvider extends EventServiceProvider
{
  protected $listen = [
    PermissionWasCreated::class => [
      // listeners for when a permission is created
    ],
    PermissionWasDeleted::class => [
      // listeners for when a permission is deleted
    ],
    PermissionWasUpdated::class => [
      // listeners for when a permission is updated
    ]
  ];
}
