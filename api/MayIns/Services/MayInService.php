<?php

namespace Api\MayIns\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\MayIns\Exceptions\MayInNotFoundException;
use Api\MayIns\Events\MayInWasCreated;
use Api\MayIns\Events\MayInWasDeleted;
use Api\MayIns\Events\MayInWasUpdated;
use Api\MayIns\Repositories\MayInRepository;

class MayInService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $mayInRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    MayInRepository $mayInRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->mayInRepository = $mayInRepository;
    }

    public function getAll($options = [])
    {
      return $this->mayInRepository->get($options);
    }

    public function getById($mayInId, array $options = [])
    {
      $mayIn = $this->getRequestedMayIn($mayInId);

      return $mayIn;
    }

    public function create($data)
    {
      $mayIn = $this->mayInRepository->create($data);

      $this->dispatcher->fire(new MayInWasCreated($mayIn));

      return $mayIn;
    }

    public function update($mayInId, array $data)
    {
      $mayIn = $this->getRequestedMayIn($mayInId);

      $this->mayInRepository->update($mayIn, $data);

      $this->dispatcher->fire(new MayInWasUpdated($mayIn));

      return $mayIn;
    }

    public function delete($mayInId)
    {
      $mayIn = $this->getRequestedMayIn($mayInId);

      $this->mayInRepository->delete($mayInId);

      $this->dispatcher->fire(new MayInWasDeleted($mayIn));
    }

    private function getRequestedMayIn($mayInId)
    {
      $mayIn = $this->mayInRepository->getById($mayInId);

      if (is_null($mayIn)) {
        throw new MayInNotFoundException();
        }

        return $mayIn;
    }
}
