<?php

namespace Api\CoQuanBanHanhs\Repositories;

use Api\CoQuanBanHanhs\Models\CoQuanBanHanh;
use Infrastructure\Database\Eloquent\Repository;

class CoQuanBanHanhRepository extends Repository
{
  public function getModel()
  {
    return new CoQuanBanHanh();
    }

    public function create(array $data)
    {
      $coQuanBanHanh = $this->getModel();
      $coQuanBanHanh->fill($data);
      $coQuanBanHanh->save();

      return $coQuanBanHanh;
    }

    public function update(CoQuanBanHanh $coQuanBanHanh, array $data)
    {
      $coQuanBanHanh->fill($data);

      $coQuanBanHanh->save();

      return $coQuanBanHanh;
    }
}
