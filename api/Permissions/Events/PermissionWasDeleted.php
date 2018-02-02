<?php

namespace Api\Permissions\Events;

use Infrastructure\Events\Event;
use Api\Permissions\Models\Permission;

class PermissionWasDeleted extends Event
{
  public $permission;

  public function __construct(Permission $permission)
  {
    $this->permission = $permission;
    }
}
