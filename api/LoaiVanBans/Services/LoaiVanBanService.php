<?php

namespace Api\LoaiVanBans\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\LoaiVanBans\Exceptions\LoaiVanBanNotFoundException;
use Api\LoaiVanBans\Events\LoaiVanBanWasCreated;
use Api\LoaiVanBans\Events\LoaiVanBanWasDeleted;
use Api\LoaiVanBans\Events\LoaiVanBanWasUpdated;
use Api\LoaiVanBans\Repositories\LoaiVanBanRepository;

class LoaiVanBanService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $loaiVanBanRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    LoaiVanBanRepository $loaiVanBanRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->loaiVanBanRepository = $loaiVanBanRepository;
    }

    public function getAll($options = [])
    {
      return $this->loaiVanBanRepository->get($options);
    }

    public function getById($loaiVanBanId, array $options = [])
    {
      $loaiVanBan = $this->getRequestedLoaiVanBan($loaiVanBanId);

      return $loaiVanBan;
    }

    public function create($data)
    {
      $loaiVanBan = $this->loaiVanBanRepository->create($data);

      $this->dispatcher->fire(new LoaiVanBanWasCreated($loaiVanBan));

      return $loaiVanBan;
    }

    public function update($loaiVanBanId, array $data)
    {
      $loaiVanBan = $this->getRequestedLoaiVanBan($loaiVanBanId);

      $this->loaiVanBanRepository->update($loaiVanBan, $data);

      $this->dispatcher->fire(new LoaiVanBanWasUpdated($loaiVanBan));

      return $loaiVanBan;
    }

    public function delete($loaiVanBanId)
    {
      $loaiVanBan = $this->getRequestedLoaiVanBan($loaiVanBanId);

      $this->loaiVanBanRepository->delete($loaiVanBanId);

      $this->dispatcher->fire(new LoaiVanBanWasDeleted($loaiVanBan));
    }

    private function getRequestedLoaiVanBan($loaiVanBanId)
    {
      $loaiVanBan = $this->loaiVanBanRepository->getById($loaiVanBanId);

      if (is_null($loaiVanBan)) {
        throw new LoaiVanBanNotFoundException();
        }

        return $loaiVanBan;
    }
}
