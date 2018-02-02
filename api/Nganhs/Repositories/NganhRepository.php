<?php

namespace Api\Nganhs\Repositories;

use Api\Nganhs\Models\Nganh;
use Infrastructure\Database\Eloquent\Repository;

class NganhRepository extends Repository
{
  public function getModel()
  {
    return new Nganh();
    }

    public function create(array $data)
    {
      $nganh = $this->getModel();
      $nganh->fill($data);
      $nganh->save();

      return $nganh;
    }

    public function update(Nganh $nganh, array $data)
    {
      $nganh->fill($data);

      $nganh->save();

      return $nganh;
    }
}
