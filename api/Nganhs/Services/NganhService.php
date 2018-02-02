<?php

namespace Api\Nganhs\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\Nganhs\Exceptions\NganhNotFoundException;
use Api\Nganhs\Events\NganhWasCreated;
use Api\Nganhs\Events\NganhWasDeleted;
use Api\Nganhs\Events\NganhWasUpdated;
use Api\Nganhs\Repositories\NganhRepository;

class NganhService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $nganhRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    NganhRepository $nganhRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->nganhRepository = $nganhRepository;
    }

    public function getAll($options = [])
    {
      return $this->nganhRepository->get($options);
    }

    public function getById($nganhId, array $options = [])
    {
      $nganh = $this->getRequestedNganh($nganhId);

      return $nganh;
    }

    public function create($data)
    {
      $nganh = $this->nganhRepository->create($data);

      $this->dispatcher->fire(new NganhWasCreated($nganh));

      return $nganh;
    }

    public function update($nganhId, array $data)
    {
      $nganh = $this->getRequestedNganh($nganhId);

      $this->nganhRepository->update($nganh, $data);

      $this->dispatcher->fire(new NganhWasUpdated($nganh));

      return $nganh;
    }

    public function delete($nganhId)
    {
      $nganh = $this->getRequestedNganh($nganhId);

      $this->nganhRepository->delete($nganhId);

      $this->dispatcher->fire(new NganhWasDeleted($nganh));
    }

    private function getRequestedNganh($nganhId)
    {
      $nganh = $this->nganhRepository->getById($nganhId);

      if (is_null($nganh)) {
        throw new NganhNotFoundException();
        }

        return $nganh;
    }
}
