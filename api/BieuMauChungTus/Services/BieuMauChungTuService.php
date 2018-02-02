<?php

namespace Api\BieuMauChungTus\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\BieuMauChungTus\Exceptions\BieuMauChungTuNotFoundException;
use Api\BieuMauChungTus\Events\BieuMauChungTuWasCreated;
use Api\BieuMauChungTus\Events\BieuMauChungTuWasDeleted;
use Api\BieuMauChungTus\Events\BieuMauChungTuWasUpdated;
use Api\BieuMauChungTus\Repositories\BieuMauChungTuRepository;

class BieuMauChungTuService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $bieuMauChungTuRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    BieuMauChungTuRepository $bieuMauChungTuRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->bieuMauChungTuRepository = $bieuMauChungTuRepository;
    }

    public function getAll($options = [])
    {
      return $this->bieuMauChungTuRepository->get($options);
    }

    public function getById($bieuMauChungTuId, array $options = [])
    {
      $bieuMauChungTu = $this->getRequestedBieuMauChungTu($bieuMauChungTuId);

      return $bieuMauChungTu;
    }

    public function create($data)
    {
      $bieuMauChungTu = $this->bieuMauChungTuRepository->create($data);

      $this->dispatcher->fire(new BieuMauChungTuWasCreated($bieuMauChungTu));

      return $bieuMauChungTu;
    }

    public function update($bieuMauChungTuId, array $data)
    {
      $bieuMauChungTu = $this->getRequestedBieuMauChungTu($bieuMauChungTuId);

      $this->bieuMauChungTuRepository->update($bieuMauChungTu, $data);

      $this->dispatcher->fire(new BieuMauChungTuWasUpdated($bieuMauChungTu));

      return $bieuMauChungTu;
    }

    public function delete($bieuMauChungTuId)
    {
      $bieuMauChungTu = $this->getRequestedBieuMauChungTu($bieuMauChungTuId);

      $this->bieuMauChungTuRepository->delete($bieuMauChungTuId);

      $this->dispatcher->fire(new BieuMauChungTuWasDeleted($bieuMauChungTu));
    }

    private function getRequestedBieuMauChungTu($bieuMauChungTuId)
    {
      $bieuMauChungTu = $this->bieuMauChungTuRepository->getById($bieuMauChungTuId);

      if (is_null($bieuMauChungTu)) {
        throw new BieuMauChungTuNotFoundException();
        }

        return $bieuMauChungTu;
    }
}
