<?php

namespace Api\TruongDuLieus\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\TruongDuLieus\Exceptions\TruongDuLieuNotFoundException;
use Api\TruongDuLieus\Events\TruongDuLieuWasCreated;
use Api\TruongDuLieus\Events\TruongDuLieuWasDeleted;
use Api\TruongDuLieus\Events\TruongDuLieuWasUpdated;
use Api\TruongDuLieus\Repositories\TruongDuLieuRepository;

class TruongDuLieuService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $truongDuLieuRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    TruongDuLieuRepository $truongDuLieuRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->truongDuLieuRepository = $truongDuLieuRepository;
    }

    public function getAll($options = [])
    {
      return $this->truongDuLieuRepository->get($options);
    }

    public function getById($truongDuLieuId, array $options = [])
    {
      $truongDuLieu = $this->getRequestedTruongDuLieu($truongDuLieuId);

      return $truongDuLieu;
    }

    public function create($data)
    {
      $truongDuLieu = $this->truongDuLieuRepository->create($data);

      $this->dispatcher->fire(new TruongDuLieuWasCreated($truongDuLieu));

      return $truongDuLieu;
    }

    public function update($truongDuLieuId, array $data)
    {
      $truongDuLieu = $this->getRequestedTruongDuLieu($truongDuLieuId);

      $this->truongDuLieuRepository->update($truongDuLieu, $data);

      $this->dispatcher->fire(new TruongDuLieuWasUpdated($truongDuLieu));

      return $truongDuLieu;
    }

    public function delete($truongDuLieuId)
    {
      $truongDuLieu = $this->getRequestedTruongDuLieu($truongDuLieuId);

      $this->truongDuLieuRepository->delete($truongDuLieuId);

      $this->dispatcher->fire(new TruongDuLieuWasDeleted($truongDuLieu));
    }

    private function getRequestedTruongDuLieu($truongDuLieuId)
    {
      $truongDuLieu = $this->truongDuLieuRepository->getById($truongDuLieuId);

      if (is_null($truongDuLieu)) {
        throw new TruongDuLieuNotFoundException();
        }

        return $truongDuLieu;
    }
}
