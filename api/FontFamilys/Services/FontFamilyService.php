<?php

namespace Api\FontFamilys\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\FontFamilys\Exceptions\FontFamilyNotFoundException;
use Api\FontFamilys\Events\FontFamilyWasCreated;
use Api\FontFamilys\Events\FontFamilyWasDeleted;
use Api\FontFamilys\Events\FontFamilyWasUpdated;
use Api\FontFamilys\Repositories\FontFamilyRepository;

class FontFamilyService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $fontFamilyRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    FontFamilyRepository $fontFamilyRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->fontFamilyRepository = $fontFamilyRepository;
    }

    public function getAll($options = [])
    {
      return $this->fontFamilyRepository->get($options);
    }

    public function getById($fontFamilyId, array $options = [])
    {
      $fontFamily = $this->getRequestedFontFamily($fontFamilyId);

      return $fontFamily;
    }

    public function create($data)
    {
      $fontFamily = $this->fontFamilyRepository->create($data);

      $this->dispatcher->fire(new FontFamilyWasCreated($fontFamily));

      return $fontFamily;
    }

    public function update($fontFamilyId, array $data)
    {
      $fontFamily = $this->getRequestedFontFamily($fontFamilyId);

      $this->fontFamilyRepository->update($fontFamily, $data);

      $this->dispatcher->fire(new FontFamilyWasUpdated($fontFamily));

      return $fontFamily;
    }

    public function delete($fontFamilyId)
    {
      $fontFamily = $this->getRequestedFontFamily($fontFamilyId);

      $this->fontFamilyRepository->delete($fontFamilyId);

      $this->dispatcher->fire(new FontFamilyWasDeleted($fontFamily));
    }

    private function getRequestedFontFamily($fontFamilyId)
    {
      $fontFamily = $this->fontFamilyRepository->getById($fontFamilyId);

      if (is_null($fontFamily)) {
        throw new FontFamilyNotFoundException();
        }

        return $fontFamily;
    }
}
