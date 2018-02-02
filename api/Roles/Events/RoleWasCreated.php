<?php

namespace Api\Roles\Events;

use Infrastructure\Events\Event;
use Api\Roles\Models\Role;

class RoleWasCreated extends Event
{
  public $role;

  public function __construct(Role $role)
  {
    $this->role = $role;
    }
}
