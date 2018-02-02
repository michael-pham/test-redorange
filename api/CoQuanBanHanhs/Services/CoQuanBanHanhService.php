<?php

namespace Api\CoQuanBanHanhs\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\CoQuanBanHanhs\Exceptions\CoQuanBanHanhNotFoundException;
use Api\CoQuanBanHanhs\Events\CoQuanBanHanhWasCreated;
use Api\CoQuanBanHanhs\Events\CoQuanBanHanhWasDeleted;
use Api\CoQuanBanHanhs\Events\CoQuanBanHanhWasUpdated;
use Api\CoQuanBanHanhs\Repositories\CoQuanBanHanhRepository;

class CoQuanBanHanhService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $coQuanBanHanhRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    CoQuanBanHanhRepository $coQuanBanHanhRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->coQuanBanHanhRepository = $coQuanBanHanhRepository;
    }

    public function getAll($options = [])
    {
      return $this->coQuanBanHanhRepository->get($options);
    }

    public function getById($coQuanBanHanhId, array $options = [])
    {
      $coQuanBanHanh = $this->getRequestedCoQuanBanHanh($coQuanBanHanhId);

      return $coQuanBanHanh;
    }

    public function create($data)
    {
      $coQuanBanHanh = $this->coQuanBanHanhRepository->create($data);

      $this->dispatcher->fire(new CoQuanBanHanhWasCreated($coQuanBanHanh));

      return $coQuanBanHanh;
    }

    public function update($coQuanBanHanhId, array $data)
    {
      $coQuanBanHanh = $this->getRequestedCoQuanBanHanh($coQuanBanHanhId);

      $this->coQuanBanHanhRepository->update($coQuanBanHanh, $data);

      $this->dispatcher->fire(new CoQuanBanHanhWasUpdated($coQuanBanHanh));

      return $coQuanBanHanh;
    }

    public function delete($coQuanBanHanhId)
    {
      $coQuanBanHanh = $this->getRequestedCoQuanBanHanh($coQuanBanHanhId);

      $this->coQuanBanHanhRepository->delete($coQuanBanHanhId);

      $this->dispatcher->fire(new CoQuanBanHanhWasDeleted($coQuanBanHanh));
    }

    private function getRequestedCoQuanBanHanh($coQuanBanHanhId)
    {
      $coQuanBanHanh = $this->coQuanBanHanhRepository->getById($coQuanBanHanhId);

      if (is_null($coQuanBanHanh)) {
        throw new CoQuanBanHanhNotFoundException();
        }

        return $coQuanBanHanh;
    }
}
