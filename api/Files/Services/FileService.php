<?php

namespace Api\Files\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\Files\Exceptions\FileNotFoundException;
use Api\Files\Events\FileWasCreated;
use Api\Files\Events\FileWasDeleted;
use Api\Files\Events\FileWasUpdated;
use Api\Files\Repositories\FileRepository;

class FileService
{
    private $auth;

    private $database;

    private $dispatcher;

    private $fileRepository;

    public function __construct(
        AuthManager $auth,
        DatabaseManager $database,
        Dispatcher $dispatcher,
        FileRepository $fileRepository
    ) {
        $this->auth = $auth;
        $this->database = $database;
        $this->dispatcher = $dispatcher;
        $this->fileRepository = $fileRepository;
    }

    public function getAll($options = [])
    {
        return $this->fileRepository->get($options);
    }

    public function getById($fileId, array $options = [])
    {
        $file = $this->getRequestedFile($fileId);

        return $file;
    }

    public function create($data)
    {
        $file = $this->fileRepository->create($data);

        $this->dispatcher->fire(new FileWasCreated($file));

        return $file;
    }

    public function update($fileId, array $data)
    {
        $file = $this->getRequestedFile($fileId);

        $this->fileRepository->update($file, $data);

        $this->dispatcher->fire(new FileWasUpdated($file));

        return $file;
    }

    public function delete($fileId)
    {
        $file = $this->getRequestedFile($fileId);

        $this->fileRepository->delete($fileId);

        $this->dispatcher->fire(new FileWasDeleted($file));
    }

    private function getRequestedFile($fileId)
    {
        $file = $this->fileRepository->getById($fileId);

        if (is_null($file)) {
            throw new FileNotFoundException();
        }

        return $file;
    }
}
