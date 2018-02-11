<?php

namespace Api\TinhTrangBinhLuans\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\TinhTrangBinhLuans\Exceptions\TinhTrangBinhLuanNotFoundException;
use Api\TinhTrangBinhLuans\Events\TinhTrangBinhLuanWasCreated;
use Api\TinhTrangBinhLuans\Events\TinhTrangBinhLuanWasDeleted;
use Api\TinhTrangBinhLuans\Events\TinhTrangBinhLuanWasUpdated;
use Api\TinhTrangBinhLuans\Repositories\TinhTrangBinhLuanRepository;

class TinhTrangBinhLuanService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $tinhTrangBinhLuanRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    TinhTrangBinhLuanRepository $tinhTrangBinhLuanRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->tinhTrangBinhLuanRepository = $tinhTrangBinhLuanRepository;
    }

    public function getAll($options = [])
    {
      return $this->tinhTrangBinhLuanRepository->get($options);
    }

    public function getById($tinhTrangBinhLuanId, array $options = [])
    {
      $tinhTrangBinhLuan = $this->getRequestedTinhTrangBinhLuan($tinhTrangBinhLuanId);

      return $tinhTrangBinhLuan;
    }

    public function create($data)
    {
      $tinhTrangBinhLuan = $this->tinhTrangBinhLuanRepository->create($data);

      $this->dispatcher->fire(new TinhTrangBinhLuanWasCreated($tinhTrangBinhLuan));

      return $tinhTrangBinhLuan;
    }

    public function update($tinhTrangBinhLuanId, array $data)
    {
      $tinhTrangBinhLuan = $this->getRequestedTinhTrangBinhLuan($tinhTrangBinhLuanId);

      $this->tinhTrangBinhLuanRepository->update($tinhTrangBinhLuan, $data);

      $this->dispatcher->fire(new TinhTrangBinhLuanWasUpdated($tinhTrangBinhLuan));

      return $tinhTrangBinhLuan;
    }

    public function delete($tinhTrangBinhLuanId)
    {
      $tinhTrangBinhLuan = $this->getRequestedTinhTrangBinhLuan($tinhTrangBinhLuanId);

      $this->tinhTrangBinhLuanRepository->delete($tinhTrangBinhLuanId);

      $this->dispatcher->fire(new TinhTrangBinhLuanWasDeleted($tinhTrangBinhLuan));
    }

    private function getRequestedTinhTrangBinhLuan($tinhTrangBinhLuanId)
    {
      $tinhTrangBinhLuan = $this->tinhTrangBinhLuanRepository->getById($tinhTrangBinhLuanId);

      if (is_null($tinhTrangBinhLuan)) {
        throw new TinhTrangBinhLuanNotFoundException();
        }

        return $tinhTrangBinhLuan;
    }
}
