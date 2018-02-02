<?php

namespace Api\Roles\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\Roles\Requests\CreateRoleRequest;
use Api\Roles\Requests\AssignPermissionsRequest;
use Api\Roles\Services\RoleService;

class RoleController extends Controller
{
  private $roleService;

  public function __construct(RoleService $roleService)
  {
    $this->roleService = $roleService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->roleService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'roles');

    return $this->response($parsedData);
  }

  public function getById($roleId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->roleService->getById($roleId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'role');

    return $this->response($parsedData);
  }

  public function create(CreateRoleRequest $request)
  {
    $data = $request->get('role', []);

    return $this->response($this->roleService->create($data), 201);
  }

  public function assignPermissions(AssignPermissionsRequest $request) {
    $permissionIds = $request->get('permission_ids', []);
    $roleId = $request->get('role_id', []);
    
    return $this->response($this->roleService->assignPermissions($roleId, $permissionIds));
  }

  public function update($roleId, Request $request)
  {
    $data = $request->get('role', []);

    return $this->response($this->roleService->update($roleId, $data));
  }

  public function delete($roleId)
  {
    return $this->response($this->roleService->delete($roleId));
  }
}
