<?php

namespace Api\PhamViVanBans\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\PhamViVanBans\Exceptions\PhamViVanBanNotFoundException;
use Api\PhamViVanBans\Events\PhamViVanBanWasCreated;
use Api\PhamViVanBans\Events\PhamViVanBanWasDeleted;
use Api\PhamViVanBans\Events\PhamViVanBanWasUpdated;
use Api\PhamViVanBans\Repositories\PhamViVanBanRepository;

class PhamViVanBanService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $phamViVanBanRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    PhamViVanBanRepository $phamViVanBanRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->phamViVanBanRepository = $phamViVanBanRepository;
    }

    public function getAll($options = [])
    {
      return $this->phamViVanBanRepository->get($options);
    }

    public function getById($phamViVanBanId, array $options = [])
    {
      $phamViVanBan = $this->getRequestedPhamViVanBan($phamViVanBanId);

      return $phamViVanBan;
    }

    public function create($data)
    {
      $phamViVanBan = $this->phamViVanBanRepository->create($data);

      $this->dispatcher->fire(new PhamViVanBanWasCreated($phamViVanBan));

      return $phamViVanBan;
    }

    public function update($phamViVanBanId, array $data)
    {
      $phamViVanBan = $this->getRequestedPhamViVanBan($phamViVanBanId);

      $this->phamViVanBanRepository->update($phamViVanBan, $data);

      $this->dispatcher->fire(new PhamViVanBanWasUpdated($phamViVanBan));

      return $phamViVanBan;
    }

    public function delete($phamViVanBanId)
    {
      $phamViVanBan = $this->getRequestedPhamViVanBan($phamViVanBanId);

      $this->phamViVanBanRepository->delete($phamViVanBanId);

      $this->dispatcher->fire(new PhamViVanBanWasDeleted($phamViVanBan));
    }

    private function getRequestedPhamViVanBan($phamViVanBanId)
    {
      $phamViVanBan = $this->phamViVanBanRepository->getById($phamViVanBanId);

      if (is_null($phamViVanBan)) {
        throw new PhamViVanBanNotFoundException();
        }

        return $phamViVanBan;
    }
}
