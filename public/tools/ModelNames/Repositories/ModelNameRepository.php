<?php

namespace Api\ModelNames\Repositories;

use Api\ModelNames\Models\ModelName;
use Infrastructure\Database\Eloquent\Repository;

class ModelNameRepository extends Repository
{
  public function getModel()
  {
    return new ModelName();
    }

    public function create(array $data)
    {
      $modelName = $this->getModel();
      $modelName->fill($data);
      $modelName->save();

      return $modelName;
    }

    public function update(ModelName $modelName, array $data)
    {
      $modelName->fill($data);

      $modelName->save();

      return $modelName;
    }
}
