<?php

namespace Api\LinkTargets\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\LinkTargets\Exceptions\LinkTargetNotFoundException;
use Api\LinkTargets\Events\LinkTargetWasCreated;
use Api\LinkTargets\Events\LinkTargetWasDeleted;
use Api\LinkTargets\Events\LinkTargetWasUpdated;
use Api\LinkTargets\Repositories\LinkTargetRepository;

class LinkTargetService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $linkTargetRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    LinkTargetRepository $linkTargetRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->linkTargetRepository = $linkTargetRepository;
    }

    public function getAll($options = [])
    {
      return $this->linkTargetRepository->get($options);
    }

    public function getById($linkTargetId, array $options = [])
    {
      $linkTarget = $this->getRequestedLinkTarget($linkTargetId);

      return $linkTarget;
    }

    public function create($data)
    {
      $linkTarget = $this->linkTargetRepository->create($data);

      $this->dispatcher->fire(new LinkTargetWasCreated($linkTarget));

      return $linkTarget;
    }

    public function update($linkTargetId, array $data)
    {
      $linkTarget = $this->getRequestedLinkTarget($linkTargetId);

      $this->linkTargetRepository->update($linkTarget, $data);

      $this->dispatcher->fire(new LinkTargetWasUpdated($linkTarget));

      return $linkTarget;
    }

    public function delete($linkTargetId)
    {
      $linkTarget = $this->getRequestedLinkTarget($linkTargetId);

      $this->linkTargetRepository->delete($linkTargetId);

      $this->dispatcher->fire(new LinkTargetWasDeleted($linkTarget));
    }

    private function getRequestedLinkTarget($linkTargetId)
    {
      $linkTarget = $this->linkTargetRepository->getById($linkTargetId);

      if (is_null($linkTarget)) {
        throw new LinkTargetNotFoundException();
        }

        return $linkTarget;
    }
}
