<?php

namespace Api\TinhTrangBaiViets\Repositories;

use Api\TinhTrangBaiViets\Models\TinhTrangBaiViet;
use Infrastructure\Database\Eloquent\Repository;

class TinhTrangBaiVietRepository extends Repository
{
  public function getModel()
  {
    return new TinhTrangBaiViet();
    }

    public function create(array $data)
    {
      $tinhTrangBaiViet = $this->getModel();
      $tinhTrangBaiViet->fill($data);
      $tinhTrangBaiViet->save();

      return $tinhTrangBaiViet;
    }

    public function update(TinhTrangBaiViet $tinhTrangBaiViet, array $data)
    {
      $tinhTrangBaiViet->fill($data);

      $tinhTrangBaiViet->save();

      return $tinhTrangBaiViet;
    }
}
