<?php

namespace Api\Links\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\Links\Exceptions\LinkNotFoundException;
use Api\Links\Events\LinkWasCreated;
use Api\Links\Events\LinkWasDeleted;
use Api\Links\Events\LinkWasUpdated;
use Api\Links\Repositories\LinkRepository;

class LinkService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $linkRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    LinkRepository $linkRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->linkRepository = $linkRepository;
    }

    public function getAll($options = [])
    {
      return $this->linkRepository->get($options);
    }

    public function getById($linkId, array $options = [])
    {
      $link = $this->getRequestedLink($linkId);

      return $link;
    }

    public function create($data)
    {
      $link = $this->linkRepository->create($data);

      $this->dispatcher->fire(new LinkWasCreated($link));

      return $link;
    }

    public function update($linkId, array $data)
    {
      $link = $this->getRequestedLink($linkId);

      $this->linkRepository->update($link, $data);

      $this->dispatcher->fire(new LinkWasUpdated($link));

      return $link;
    }

    public function delete($linkId)
    {
      $link = $this->getRequestedLink($linkId);

      $this->linkRepository->delete($linkId);

      $this->dispatcher->fire(new LinkWasDeleted($link));
    }

    private function getRequestedLink($linkId)
    {
      $link = $this->linkRepository->getById($linkId);

      if (is_null($link)) {
        throw new LinkNotFoundException();
        }

        return $link;
    }
}
