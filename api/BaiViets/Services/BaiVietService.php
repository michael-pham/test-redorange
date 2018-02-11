<?php

namespace Api\BaiViets\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\BaiViets\Exceptions\BaiVietNotFoundException;
use Api\BaiViets\Events\BaiVietWasCreated;
use Api\BaiViets\Events\BaiVietWasDeleted;
use Api\BaiViets\Events\BaiVietWasUpdated;
use Api\BaiViets\Repositories\BaiVietRepository;

class BaiVietService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $baiVietRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    BaiVietRepository $baiVietRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->baiVietRepository = $baiVietRepository;
    }

    public function getAll($options = [])
    {
      return $this->baiVietRepository->get($options);
    }

    public function getById($baiVietId, array $options = [])
    {
      $baiViet = $this->getRequestedBaiViet($baiVietId);

      return $baiViet;
    }

    public function create($data)
    {
      $baiViet = $this->baiVietRepository->create($data);

      $this->dispatcher->fire(new BaiVietWasCreated($baiViet));

      return $baiViet;
    }

    public function update($baiVietId, array $data)
    {
      $baiViet = $this->getRequestedBaiViet($baiVietId);

      $this->baiVietRepository->update($baiViet, $data);

      $this->dispatcher->fire(new BaiVietWasUpdated($baiViet));

      return $baiViet;
    }

    public function delete($baiVietId)
    {
      $baiViet = $this->getRequestedBaiViet($baiVietId);

      $this->baiVietRepository->delete($baiVietId);

      $this->dispatcher->fire(new BaiVietWasDeleted($baiViet));
    }

    private function getRequestedBaiViet($baiVietId)
    {
      $baiViet = $this->baiVietRepository->getById($baiVietId);

      if (is_null($baiViet)) {
        throw new BaiVietNotFoundException();
        }

        return $baiViet;
    }
}
