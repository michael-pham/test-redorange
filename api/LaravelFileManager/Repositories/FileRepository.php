<?php

namespace Api\Files\Repositories;

use Api\Files\Models\File;
use Infrastructure\Database\Eloquent\Repository;

class FileRepository extends Repository
{
  public function getModel()
  {
    return new File();
    }

    public function create(array $data)
    {
      $file = $this->getModel();
      $file->fill($data);
      $file->save();

      return $file;
    }

    public function update(File $file, array $data)
    {
      $file->fill($data);

      $file->save();

      return $file;
    }
}
