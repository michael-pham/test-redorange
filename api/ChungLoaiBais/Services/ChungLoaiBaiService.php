<?php

namespace Api\ChungLoaiBais\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\ChungLoaiBais\Exceptions\ChungLoaiBaiNotFoundException;
use Api\ChungLoaiBais\Events\ChungLoaiBaiWasCreated;
use Api\ChungLoaiBais\Events\ChungLoaiBaiWasDeleted;
use Api\ChungLoaiBais\Events\ChungLoaiBaiWasUpdated;
use Api\ChungLoaiBais\Repositories\ChungLoaiBaiRepository;

class ChungLoaiBaiService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $chungLoaiBaiRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    ChungLoaiBaiRepository $chungLoaiBaiRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->chungLoaiBaiRepository = $chungLoaiBaiRepository;
    }

    public function getAll($options = [])
    {
      return $this->chungLoaiBaiRepository->get($options);
    }

    public function getById($chungLoaiBaiId, array $options = [])
    {
      $chungLoaiBai = $this->getRequestedChungLoaiBai($chungLoaiBaiId);

      return $chungLoaiBai;
    }

    public function create($data)
    {
      $chungLoaiBai = $this->chungLoaiBaiRepository->create($data);

      $this->dispatcher->fire(new ChungLoaiBaiWasCreated($chungLoaiBai));

      return $chungLoaiBai;
    }

    public function update($chungLoaiBaiId, array $data)
    {
      $chungLoaiBai = $this->getRequestedChungLoaiBai($chungLoaiBaiId);

      $this->chungLoaiBaiRepository->update($chungLoaiBai, $data);

      $this->dispatcher->fire(new ChungLoaiBaiWasUpdated($chungLoaiBai));

      return $chungLoaiBai;
    }

    public function delete($chungLoaiBaiId)
    {
      $chungLoaiBai = $this->getRequestedChungLoaiBai($chungLoaiBaiId);

      $this->chungLoaiBaiRepository->delete($chungLoaiBaiId);

      $this->dispatcher->fire(new ChungLoaiBaiWasDeleted($chungLoaiBai));
    }

    private function getRequestedChungLoaiBai($chungLoaiBaiId)
    {
      $chungLoaiBai = $this->chungLoaiBaiRepository->getById($chungLoaiBaiId);

      if (is_null($chungLoaiBai)) {
        throw new ChungLoaiBaiNotFoundException();
        }

        return $chungLoaiBai;
    }
}
