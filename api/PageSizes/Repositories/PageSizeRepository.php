<?php

namespace Api\PageSizes\Repositories;

use Api\PageSizes\Models\PageSize;
use Infrastructure\Database\Eloquent\Repository;

class PageSizeRepository extends Repository
{
  public function getModel()
  {
    return new PageSize();
    }

    public function create(array $data)
    {
      $pageSize = $this->getModel();
      $pageSize->fill($data);
      $pageSize->save();

      return $pageSize;
    }

    public function update(PageSize $pageSize, array $data)
    {
      $pageSize->fill($data);

      $pageSize->save();

      return $pageSize;
    }
}
