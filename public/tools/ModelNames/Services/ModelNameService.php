<?php

namespace Api\ModelNames\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\ModelNames\Exceptions\ModelNameNotFoundException;
use Api\ModelNames\Events\ModelNameWasCreated;
use Api\ModelNames\Events\ModelNameWasDeleted;
use Api\ModelNames\Events\ModelNameWasUpdated;
use Api\ModelNames\Repositories\ModelNameRepository;

class ModelNameService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $modelNameRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    ModelNameRepository $modelNameRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->modelNameRepository = $modelNameRepository;
    }

    public function getAll($options = [])
    {
      return $this->modelNameRepository->get($options);
    }

    public function getById($modelNameId, array $options = [])
    {
      $modelName = $this->getRequestedModelName($modelNameId);

      return $modelName;
    }

    public function create($data)
    {
      $modelName = $this->modelNameRepository->create($data);

      $this->dispatcher->fire(new ModelNameWasCreated($modelName));

      return $modelName;
    }

    public function update($modelNameId, array $data)
    {
      $modelName = $this->getRequestedModelName($modelNameId);

      $this->modelNameRepository->update($modelName, $data);

      $this->dispatcher->fire(new ModelNameWasUpdated($modelName));

      return $modelName;
    }

    public function delete($modelNameId)
    {
      $modelName = $this->getRequestedModelName($modelNameId);

      $this->modelNameRepository->delete($modelNameId);

      $this->dispatcher->fire(new ModelNameWasDeleted($modelName));
    }

    private function getRequestedModelName($modelNameId)
    {
      $modelName = $this->modelNameRepository->getById($modelNameId);

      if (is_null($modelName)) {
        throw new ModelNameNotFoundException();
        }

        return $modelName;
    }
}
