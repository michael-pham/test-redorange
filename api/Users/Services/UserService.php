<?php

namespace Api\Users\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\Users\Exceptions\UserNotFoundException;
use Api\Roles\Exceptions\RoleNotFoundException;
use Api\Users\Events\UserWasCreated;
use Api\Users\Events\UserWasDeleted;
use Api\Users\Events\UserWasUpdated;
use Api\Users\Repositories\UserRepository;
use Api\Roles\Repositories\RoleRepository;

class UserService
{
    private $auth;

    private $database;

    private $dispatcher;

    private $userRepository;

    public function __construct(
        AuthManager $auth,
        DatabaseManager $database,
        Dispatcher $dispatcher,
        UserRepository $userRepository,
        RoleRepository $roleRepository
    ) {
        $this->auth = $auth;
        $this->database = $database;
        $this->dispatcher = $dispatcher;
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
    }

    public function getAll($options = [])
    {
        return $this->userRepository->get($options);
    }

    public function getById($userId, array $options = [])
    {
        $user = $this->getRequestedUser($userId);

        return $user;
    }

    public function create($data)
    {
        $user = $this->userRepository->create($data);

        $this->dispatcher->fire(new UserWasCreated($user));

        return $user;
    }

    public function update($userId, array $data)
    {
        $user = $this->getRequestedUser($userId);

        $this->userRepository->update($user, $data);

        $this->dispatcher->fire(new UserWasUpdated($user));

        return $user;
    }

    public function delete($userId)
    {
        $user = $this->getRequestedUser($userId);

        $this->userRepository->delete($userId);

        $this->dispatcher->fire(new UserWasDeleted($user));
    }

    public function assignRoles($userId, $roleIds) {
      $user = $this->getRequestedUser($userId);
      $allRoles =  $this->roleRepository->get();
      $assignedRoles = [];

      foreach($roleIds as $roleId) {
        array_push($assignedRoles, $this->getRequestedRoles($roleId, $allRoles));
      }

      foreach($allRoles as $role) {
        $user->detachRole($role);
      }

      foreach($assignedRoles as $assignedRole) {
        $user->attachRole($assignedRole);
      }

      return $user;
    }

    private function getRequestedUser($userId)
    {
        $user = $this->userRepository->getById($userId);

        if (is_null($user)) {
            throw new UserNotFoundException();
        }

        return $user;
    }

    private function getRequestedRoles($roleId, $roles)
    {
      foreach($roles as $role) {
        if ($role->id == $roleId) return $role;
      }
      throw new RoleNotFoundException();
    }
}
