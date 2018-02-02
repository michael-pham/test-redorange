<?php

namespace Api\Images\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\Images\Exceptions\ImageNotFoundException;
use Api\Images\Events\ImageWasCreated;
use Api\Images\Events\ImageWasDeleted;
use Api\Images\Events\ImageWasUpdated;
use Api\Images\Repositories\ImageRepository;

class ImageService
{
    private $auth;

    private $database;

    private $dispatcher;

    private $imageRepository;

    public function __construct(
        AuthManager $auth,
        DatabaseManager $database,
        Dispatcher $dispatcher,
        ImageRepository $imageRepository
    ) {
        $this->auth = $auth;
        $this->database = $database;
        $this->dispatcher = $dispatcher;
        $this->imageRepository = $imageRepository;
    }

    public function getAll($options = [])
    {
        return $this->imageRepository->get($options);
    }

    public function getById($imageId, array $options = [])
    {
        $image = $this->getRequestedImage($imageId);

        return $image;
    }

    public function create($data)
    {
        $image = $this->imageRepository->create($data);

        $this->dispatcher->fire(new ImageWasCreated($image));

        return $image;
    }

    public function update($imageId, array $data)
    {
        $image = $this->getRequestedImage($imageId);

        $this->imageRepository->update($image, $data);

        $this->dispatcher->fire(new ImageWasUpdated($image));

        return $image;
    }

    public function delete($imageId)
    {
        $image = $this->getRequestedImage($imageId);

        $this->imageRepository->delete($imageId);

        $this->dispatcher->fire(new ImageWasDeleted($image));
    }

    private function getRequestedImage($imageId)
    {
        $image = $this->imageRepository->getById($imageId);

        if (is_null($image)) {
            throw new ImageNotFoundException();
        }

        return $image;
    }
}
