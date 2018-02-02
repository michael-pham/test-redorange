<?php

namespace Api\LinhVucVanBans\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\LinhVucVanBans\Exceptions\LinhVucVanBanNotFoundException;
use Api\LinhVucVanBans\Events\LinhVucVanBanWasCreated;
use Api\LinhVucVanBans\Events\LinhVucVanBanWasDeleted;
use Api\LinhVucVanBans\Events\LinhVucVanBanWasUpdated;
use Api\LinhVucVanBans\Repositories\LinhVucVanBanRepository;

class LinhVucVanBanService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $linhVucVanBanRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    LinhVucVanBanRepository $linhVucVanBanRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->linhVucVanBanRepository = $linhVucVanBanRepository;
    }

    public function getAll($options = [])
    {
      return $this->linhVucVanBanRepository->get($options);
    }

    public function getById($linhVucVanBanId, array $options = [])
    {
      $linhVucVanBan = $this->getRequestedLinhVucVanBan($linhVucVanBanId);

      return $linhVucVanBan;
    }

    public function create($data)
    {
      $linhVucVanBan = $this->linhVucVanBanRepository->create($data);

      $this->dispatcher->fire(new LinhVucVanBanWasCreated($linhVucVanBan));

      return $linhVucVanBan;
    }

    public function update($linhVucVanBanId, array $data)
    {
      $linhVucVanBan = $this->getRequestedLinhVucVanBan($linhVucVanBanId);

      $this->linhVucVanBanRepository->update($linhVucVanBan, $data);

      $this->dispatcher->fire(new LinhVucVanBanWasUpdated($linhVucVanBan));

      return $linhVucVanBan;
    }

    public function delete($linhVucVanBanId)
    {
      $linhVucVanBan = $this->getRequestedLinhVucVanBan($linhVucVanBanId);

      $this->linhVucVanBanRepository->delete($linhVucVanBanId);

      $this->dispatcher->fire(new LinhVucVanBanWasDeleted($linhVucVanBan));
    }

    private function getRequestedLinhVucVanBan($linhVucVanBanId)
    {
      $linhVucVanBan = $this->linhVucVanBanRepository->getById($linhVucVanBanId);

      if (is_null($linhVucVanBan)) {
        throw new LinhVucVanBanNotFoundException();
        }

        return $linhVucVanBan;
    }
}
