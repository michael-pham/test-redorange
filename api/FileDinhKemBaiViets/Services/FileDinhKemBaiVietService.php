<?php

namespace Api\FileDinhKemBaiViets\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\FileDinhKemBaiViets\Exceptions\FileDinhKemBaiVietNotFoundException;
use Api\FileDinhKemBaiViets\Events\FileDinhKemBaiVietWasCreated;
use Api\FileDinhKemBaiViets\Events\FileDinhKemBaiVietWasDeleted;
use Api\FileDinhKemBaiViets\Events\FileDinhKemBaiVietWasUpdated;
use Api\FileDinhKemBaiViets\Repositories\FileDinhKemBaiVietRepository;

class FileDinhKemBaiVietService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $fileDinhKemBaiVietRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    FileDinhKemBaiVietRepository $fileDinhKemBaiVietRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->fileDinhKemBaiVietRepository = $fileDinhKemBaiVietRepository;
    }

    public function getAll($options = [])
    {
      return $this->fileDinhKemBaiVietRepository->get($options);
    }

    public function getById($fileDinhKemBaiVietId, array $options = [])
    {
      $fileDinhKemBaiViet = $this->getRequestedFileDinhKemBaiViet($fileDinhKemBaiVietId);

      return $fileDinhKemBaiViet;
    }

    public function create($data)
    {
      $fileDinhKemBaiViet = $this->fileDinhKemBaiVietRepository->create($data);

      $this->dispatcher->fire(new FileDinhKemBaiVietWasCreated($fileDinhKemBaiViet));

      return $fileDinhKemBaiViet;
    }

    public function update($fileDinhKemBaiVietId, array $data)
    {
      $fileDinhKemBaiViet = $this->getRequestedFileDinhKemBaiViet($fileDinhKemBaiVietId);

      $this->fileDinhKemBaiVietRepository->update($fileDinhKemBaiViet, $data);

      $this->dispatcher->fire(new FileDinhKemBaiVietWasUpdated($fileDinhKemBaiViet));

      return $fileDinhKemBaiViet;
    }

    public function delete($fileDinhKemBaiVietId)
    {
      $fileDinhKemBaiViet = $this->getRequestedFileDinhKemBaiViet($fileDinhKemBaiVietId);

      $this->fileDinhKemBaiVietRepository->delete($fileDinhKemBaiVietId);

      $this->dispatcher->fire(new FileDinhKemBaiVietWasDeleted($fileDinhKemBaiViet));
    }

    private function getRequestedFileDinhKemBaiViet($fileDinhKemBaiVietId)
    {
      $fileDinhKemBaiViet = $this->fileDinhKemBaiVietRepository->getById($fileDinhKemBaiVietId);

      if (is_null($fileDinhKemBaiViet)) {
        throw new FileDinhKemBaiVietNotFoundException();
        }

        return $fileDinhKemBaiViet;
    }
}
