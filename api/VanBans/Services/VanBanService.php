<?php

namespace Api\VanBans\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\VanBans\Exceptions\VanBanNotFoundException;
use Api\VanBans\Events\VanBanWasCreated;
use Api\VanBans\Events\VanBanWasDeleted;
use Api\VanBans\Events\VanBanWasUpdated;
use Api\VanBans\Repositories\VanBanRepository;

class VanBanService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $vanBanRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    VanBanRepository $vanBanRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->vanBanRepository = $vanBanRepository;
    }

    public function getAll($options = [])
    {
      return $this->vanBanRepository->get($options);
    }

    public function getById($vanBanId, array $options = [])
    {
      $vanBan = $this->getRequestedVanBan($vanBanId);

      return $vanBan;
    }

    public function create($data)
    {
      $vanBan = $this->vanBanRepository->create($data);

      $this->dispatcher->fire(new VanBanWasCreated($vanBan));

      return $vanBan;
    }

    public function update($vanBanId, array $data)
    {
      $vanBan = $this->getRequestedVanBan($vanBanId);

      $this->vanBanRepository->update($vanBan, $data);

      $this->dispatcher->fire(new VanBanWasUpdated($vanBan));

      return $vanBan;
    }

    public function delete($vanBanId)
    {
      $vanBan = $this->getRequestedVanBan($vanBanId);

      $this->vanBanRepository->delete($vanBanId);

      $this->dispatcher->fire(new VanBanWasDeleted($vanBan));
    }

    private function getRequestedVanBan($vanBanId)
    {
      $vanBan = $this->vanBanRepository->getById($vanBanId);

      if (is_null($vanBan)) {
        throw new VanBanNotFoundException();
        }

        return $vanBan;
    }
}
