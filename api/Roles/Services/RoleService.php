<?php

namespace Api\Roles\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\Roles\Exceptions\RoleNotFoundException;
use Api\Roles\Events\RoleWasCreated;
use Api\Roles\Events\RoleWasDeleted;
use Api\Roles\Events\RoleWasUpdated;
use Api\Roles\Repositories\RoleRepository;
use Api\Permissions\Repositories\PermissionRepository;

class RoleService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $roleRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    RoleRepository $roleRepository,
    PermissionRepository $permissionRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->roleRepository = $roleRepository;
    $this->permissionRepository = $permissionRepository;
    }

    public function getAll($options = [])
    {
      return $this->roleRepository->get($options);
    }

    public function getById($roleId, array $options = [])
    {
      $role = $this->getRequestedRole($roleId);

      return $role;
    }

    public function create($data)
    {
      $role = $this->roleRepository->create($data);

      $this->dispatcher->fire(new RoleWasCreated($role));

      return $role;
    }

    public function update($roleId, array $data)
    {
      $role = $this->getRequestedRole($roleId);

      $this->roleRepository->update($role, $data);

      $this->dispatcher->fire(new RoleWasUpdated($role));

      return $role;
    }

    public function delete($roleId)
    {
      $role = $this->getRequestedRole($roleId);

      $this->roleRepository->delete($roleId);

      $this->dispatcher->fire(new RoleWasDeleted($role));
    }

    public function assignPermissions($roleId, $permissionIds) {
      $role = $this->getRequestedRole($roleId);
      $allPermissions =  $this->permissionRepository->get();
      $assignedPermissions = [];

      foreach($permissionIds as $permissionId) {
        array_push($assignedPermissions, $this->getRequestedPermissions($permissionId, $allPermissions));
      }

      foreach($allPermissions as $permission) {
        $role->detachPermission($permission);
      }

      foreach($assignedPermissions as $assignedPermission) {
        $role->attachPermission($assignedPermission);
      }

      return $role;
    }

    private function getRequestedRole($roleId)
    {
      $role = $this->roleRepository->getById($roleId);

      if (is_null($role)) {
        throw new RoleNotFoundException();
        }

        return $role;
    }

    private function getRequestedPermissions($permissionId, $permissions)
    {
      foreach($permissions as $permission) {
        if ($permission->id == $permissionId) return $permission;
      }
      throw new PermissionNotFoundException();
    }
}
