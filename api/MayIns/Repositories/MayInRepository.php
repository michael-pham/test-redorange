<?php

namespace Api\MayIns\Repositories;

use Api\MayIns\Models\MayIn;
use Infrastructure\Database\Eloquent\Repository;

class MayInRepository extends Repository
{
  public function getModel()
  {
    return new MayIn();
    }

    public function create(array $data)
    {
      $mayIn = $this->getModel();
      $mayIn->fill($data);
      $mayIn->save();

      return $mayIn;
    }

    public function update(MayIn $mayIn, array $data)
    {
      $mayIn->fill($data);

      $mayIn->save();

      return $mayIn;
    }
}
