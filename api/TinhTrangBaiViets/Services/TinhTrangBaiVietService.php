<?php

namespace Api\TinhTrangBaiViets\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\TinhTrangBaiViets\Exceptions\TinhTrangBaiVietNotFoundException;
use Api\TinhTrangBaiViets\Events\TinhTrangBaiVietWasCreated;
use Api\TinhTrangBaiViets\Events\TinhTrangBaiVietWasDeleted;
use Api\TinhTrangBaiViets\Events\TinhTrangBaiVietWasUpdated;
use Api\TinhTrangBaiViets\Repositories\TinhTrangBaiVietRepository;

class TinhTrangBaiVietService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $tinhTrangBaiVietRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    TinhTrangBaiVietRepository $tinhTrangBaiVietRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->tinhTrangBaiVietRepository = $tinhTrangBaiVietRepository;
    }

    public function getAll($options = [])
    {
      return $this->tinhTrangBaiVietRepository->get($options);
    }

    public function getById($tinhTrangBaiVietId, array $options = [])
    {
      $tinhTrangBaiViet = $this->getRequestedTinhTrangBaiViet($tinhTrangBaiVietId);

      return $tinhTrangBaiViet;
    }

    public function create($data)
    {
      $tinhTrangBaiViet = $this->tinhTrangBaiVietRepository->create($data);

      $this->dispatcher->fire(new TinhTrangBaiVietWasCreated($tinhTrangBaiViet));

      return $tinhTrangBaiViet;
    }

    public function update($tinhTrangBaiVietId, array $data)
    {
      $tinhTrangBaiViet = $this->getRequestedTinhTrangBaiViet($tinhTrangBaiVietId);

      $this->tinhTrangBaiVietRepository->update($tinhTrangBaiViet, $data);

      $this->dispatcher->fire(new TinhTrangBaiVietWasUpdated($tinhTrangBaiViet));

      return $tinhTrangBaiViet;
    }

    public function delete($tinhTrangBaiVietId)
    {
      $tinhTrangBaiViet = $this->getRequestedTinhTrangBaiViet($tinhTrangBaiVietId);

      $this->tinhTrangBaiVietRepository->delete($tinhTrangBaiVietId);

      $this->dispatcher->fire(new TinhTrangBaiVietWasDeleted($tinhTrangBaiViet));
    }

    private function getRequestedTinhTrangBaiViet($tinhTrangBaiVietId)
    {
      $tinhTrangBaiViet = $this->tinhTrangBaiVietRepository->getById($tinhTrangBaiVietId);

      if (is_null($tinhTrangBaiViet)) {
        throw new TinhTrangBaiVietNotFoundException();
        }

        return $tinhTrangBaiViet;
    }
}
