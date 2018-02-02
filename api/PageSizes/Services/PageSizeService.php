<?php

namespace Api\PageSizes\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\PageSizes\Exceptions\PageSizeNotFoundException;
use Api\PageSizes\Events\PageSizeWasCreated;
use Api\PageSizes\Events\PageSizeWasDeleted;
use Api\PageSizes\Events\PageSizeWasUpdated;
use Api\PageSizes\Repositories\PageSizeRepository;

class PageSizeService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $pageSizeRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    PageSizeRepository $pageSizeRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->pageSizeRepository = $pageSizeRepository;
    }

    public function getAll($options = [])
    {
      return $this->pageSizeRepository->get($options);
    }

    public function getById($pageSizeId, array $options = [])
    {
      $pageSize = $this->getRequestedPageSize($pageSizeId);

      return $pageSize;
    }

    public function create($data)
    {
      $pageSize = $this->pageSizeRepository->create($data);

      $this->dispatcher->fire(new PageSizeWasCreated($pageSize));

      return $pageSize;
    }

    public function update($pageSizeId, array $data)
    {
      $pageSize = $this->getRequestedPageSize($pageSizeId);

      $this->pageSizeRepository->update($pageSize, $data);

      $this->dispatcher->fire(new PageSizeWasUpdated($pageSize));

      return $pageSize;
    }

    public function delete($pageSizeId)
    {
      $pageSize = $this->getRequestedPageSize($pageSizeId);

      $this->pageSizeRepository->delete($pageSizeId);

      $this->dispatcher->fire(new PageSizeWasDeleted($pageSize));
    }

    private function getRequestedPageSize($pageSizeId)
    {
      $pageSize = $this->pageSizeRepository->getById($pageSizeId);

      if (is_null($pageSize)) {
        throw new PageSizeNotFoundException();
        }

        return $pageSize;
    }
}
