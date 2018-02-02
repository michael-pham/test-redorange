<?php

namespace Api\DuLieuDangKys\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\DuLieuDangKys\Exceptions\DuLieuDangKyNotFoundException;
use Api\DuLieuDangKys\Events\DuLieuDangKyWasCreated;
use Api\DuLieuDangKys\Events\DuLieuDangKyWasDeleted;
use Api\DuLieuDangKys\Events\DuLieuDangKyWasUpdated;
use Api\DuLieuDangKys\Repositories\DuLieuDangKyRepository;

class DuLieuDangKyService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $duLieuDangKyRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    DuLieuDangKyRepository $duLieuDangKyRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->duLieuDangKyRepository = $duLieuDangKyRepository;
    }

    public function getAll($options = [])
    {
      return $this->duLieuDangKyRepository->get($options);
    }

    public function getById($duLieuDangKyId, array $options = [])
    {
      $duLieuDangKy = $this->getRequestedDuLieuDangKy($duLieuDangKyId);

      return $duLieuDangKy;
    }

    public function create($data)
    {
      $duLieuDangKy = $this->duLieuDangKyRepository->create($data);

      $this->dispatcher->fire(new DuLieuDangKyWasCreated($duLieuDangKy));

      return $duLieuDangKy;
    }

    public function update($duLieuDangKyId, array $data)
    {
      $duLieuDangKy = $this->getRequestedDuLieuDangKy($duLieuDangKyId);

      $this->duLieuDangKyRepository->update($duLieuDangKy, $data);

      $this->dispatcher->fire(new DuLieuDangKyWasUpdated($duLieuDangKy));

      return $duLieuDangKy;
    }

    public function delete($duLieuDangKyId)
    {
      $duLieuDangKy = $this->getRequestedDuLieuDangKy($duLieuDangKyId);

      $this->duLieuDangKyRepository->delete($duLieuDangKyId);

      $this->dispatcher->fire(new DuLieuDangKyWasDeleted($duLieuDangKy));
    }

    private function getRequestedDuLieuDangKy($duLieuDangKyId)
    {
      $duLieuDangKy = $this->duLieuDangKyRepository->getById($duLieuDangKyId);

      if (is_null($duLieuDangKy)) {
        throw new DuLieuDangKyNotFoundException();
        }

        return $duLieuDangKy;
    }
}
