<?php

namespace Api\BaiViets\Repositories;

use Api\BaiViets\Models\BaiViet;
use Infrastructure\Database\Eloquent\Repository;

class BaiVietRepository extends Repository
{
  public function getModel()
  {
    return new BaiViet();
    }

    public function create(array $data)
    {
      $baiViet = $this->getModel();
      $baiViet->fill($data);
      $baiViet->save();

      return $baiViet;
    }

    public function update(BaiViet $baiViet, array $data)
    {
      $baiViet->fill($data);

      $baiViet->save();

      return $baiViet;
    }
}
