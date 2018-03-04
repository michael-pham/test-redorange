<?php

namespace Api\LoaiBaiViets\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\LoaiBaiViets\Exceptions\LoaiBaiVietNotFoundException;
use Api\LoaiBaiViets\Events\LoaiBaiVietWasCreated;
use Api\LoaiBaiViets\Events\LoaiBaiVietWasDeleted;
use Api\LoaiBaiViets\Events\LoaiBaiVietWasUpdated;
use Api\LoaiBaiViets\Repositories\LoaiBaiVietRepository;

class LoaiBaiVietService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $loaiBaiVietRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    LoaiBaiVietRepository $loaiBaiVietRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->loaiBaiVietRepository = $loaiBaiVietRepository;
    }

    public function getAll($options = [])
    {
      return $this->loaiBaiVietRepository->get($options);
    }

    public function getById($loaiBaiVietId, array $options = [])
    {
      $loaiBaiViet = $this->getRequestedLoaiBaiViet($loaiBaiVietId);

      return $loaiBaiViet;
    }

    public function create($data)
    {
      $loaiBaiViet = $this->loaiBaiVietRepository->create($data);

      $this->dispatcher->fire(new LoaiBaiVietWasCreated($loaiBaiViet));

      return $loaiBaiViet;
    }

    public function update($loaiBaiVietId, array $data)
    {
      $loaiBaiViet = $this->getRequestedLoaiBaiViet($loaiBaiVietId);

      $this->loaiBaiVietRepository->update($loaiBaiViet, $data);

      $this->dispatcher->fire(new LoaiBaiVietWasUpdated($loaiBaiViet));

      return $loaiBaiViet;
    }

    public function delete($loaiBaiVietId)
    {
      $loaiBaiViet = $this->getRequestedLoaiBaiViet($loaiBaiVietId);

      $this->loaiBaiVietRepository->delete($loaiBaiVietId);

      $this->dispatcher->fire(new LoaiBaiVietWasDeleted($loaiBaiViet));
    }

    private function getRequestedLoaiBaiViet($loaiBaiVietId)
    {
      $loaiBaiViet = $this->loaiBaiVietRepository->getById($loaiBaiVietId);

      if (is_null($loaiBaiViet)) {
        throw new LoaiBaiVietNotFoundException();
        }

        return $loaiBaiViet;
    }
}
