<?php

namespace Api\Images\Repositories;

use Api\Images\Models\Image;
use Infrastructure\Database\Eloquent\Repository;

class ImageRepository extends Repository
{
  public function getModel()
  {
    return new Image();
    }

    public function create(array $data)
    {
      $image = $this->getModel();
      $image->fill($data);
      $image->save();

      return $image;
    }

    public function update(Image $image, array $data)
    {
      $image->fill($data);

      $image->save();

      return $image;
    }
}
