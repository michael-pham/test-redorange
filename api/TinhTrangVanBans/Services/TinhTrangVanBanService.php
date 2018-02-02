<?php

namespace Api\TinhTrangVanBans\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\TinhTrangVanBans\Exceptions\TinhTrangVanBanNotFoundException;
use Api\TinhTrangVanBans\Events\TinhTrangVanBanWasCreated;
use Api\TinhTrangVanBans\Events\TinhTrangVanBanWasDeleted;
use Api\TinhTrangVanBans\Events\TinhTrangVanBanWasUpdated;
use Api\TinhTrangVanBans\Repositories\TinhTrangVanBanRepository;

class TinhTrangVanBanService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $tinhTrangVanBanRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    TinhTrangVanBanRepository $tinhTrangVanBanRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->tinhTrangVanBanRepository = $tinhTrangVanBanRepository;
    }

    public function getAll($options = [])
    {
      return $this->tinhTrangVanBanRepository->get($options);
    }

    public function getById($tinhTrangVanBanId, array $options = [])
    {
      $tinhTrangVanBan = $this->getRequestedTinhTrangVanBan($tinhTrangVanBanId);

      return $tinhTrangVanBan;
    }

    public function create($data)
    {
      $tinhTrangVanBan = $this->tinhTrangVanBanRepository->create($data);

      $this->dispatcher->fire(new TinhTrangVanBanWasCreated($tinhTrangVanBan));

      return $tinhTrangVanBan;
    }

    public function update($tinhTrangVanBanId, array $data)
    {
      $tinhTrangVanBan = $this->getRequestedTinhTrangVanBan($tinhTrangVanBanId);

      $this->tinhTrangVanBanRepository->update($tinhTrangVanBan, $data);

      $this->dispatcher->fire(new TinhTrangVanBanWasUpdated($tinhTrangVanBan));

      return $tinhTrangVanBan;
    }

    public function delete($tinhTrangVanBanId)
    {
      $tinhTrangVanBan = $this->getRequestedTinhTrangVanBan($tinhTrangVanBanId);

      $this->tinhTrangVanBanRepository->delete($tinhTrangVanBanId);

      $this->dispatcher->fire(new TinhTrangVanBanWasDeleted($tinhTrangVanBan));
    }

    private function getRequestedTinhTrangVanBan($tinhTrangVanBanId)
    {
      $tinhTrangVanBan = $this->tinhTrangVanBanRepository->getById($tinhTrangVanBanId);

      if (is_null($tinhTrangVanBan)) {
        throw new TinhTrangVanBanNotFoundException();
        }

        return $tinhTrangVanBan;
    }
}
