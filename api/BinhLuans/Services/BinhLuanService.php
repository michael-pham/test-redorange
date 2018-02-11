<?php

namespace Api\BinhLuans\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\BinhLuans\Exceptions\BinhLuanNotFoundException;
use Api\BinhLuans\Events\BinhLuanWasCreated;
use Api\BinhLuans\Events\BinhLuanWasDeleted;
use Api\BinhLuans\Events\BinhLuanWasUpdated;
use Api\BinhLuans\Repositories\BinhLuanRepository;

class BinhLuanService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $binhLuanRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    BinhLuanRepository $binhLuanRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->binhLuanRepository = $binhLuanRepository;
    }

    public function getAll($options = [])
    {
      return $this->binhLuanRepository->get($options);
    }

    public function getById($binhLuanId, array $options = [])
    {
      $binhLuan = $this->getRequestedBinhLuan($binhLuanId);

      return $binhLuan;
    }

    public function create($data)
    {
      $binhLuan = $this->binhLuanRepository->create($data);

      $this->dispatcher->fire(new BinhLuanWasCreated($binhLuan));

      return $binhLuan;
    }

    public function update($binhLuanId, array $data)
    {
      $binhLuan = $this->getRequestedBinhLuan($binhLuanId);

      $this->binhLuanRepository->update($binhLuan, $data);

      $this->dispatcher->fire(new BinhLuanWasUpdated($binhLuan));

      return $binhLuan;
    }

    public function delete($binhLuanId)
    {
      $binhLuan = $this->getRequestedBinhLuan($binhLuanId);

      $this->binhLuanRepository->delete($binhLuanId);

      $this->dispatcher->fire(new BinhLuanWasDeleted($binhLuan));
    }

    private function getRequestedBinhLuan($binhLuanId)
    {
      $binhLuan = $this->binhLuanRepository->getById($binhLuanId);

      if (is_null($binhLuan)) {
        throw new BinhLuanNotFoundException();
        }

        return $binhLuan;
    }
}
