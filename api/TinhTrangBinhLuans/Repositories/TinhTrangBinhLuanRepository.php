<?php

namespace Api\TinhTrangBinhLuans\Repositories;

use Api\TinhTrangBinhLuans\Models\TinhTrangBinhLuan;
use Infrastructure\Database\Eloquent\Repository;

class TinhTrangBinhLuanRepository extends Repository
{
  public function getModel()
  {
    return new TinhTrangBinhLuan();
    }

    public function create(array $data)
    {
      $tinhTrangBinhLuan = $this->getModel();
      $tinhTrangBinhLuan->fill($data);
      $tinhTrangBinhLuan->save();

      return $tinhTrangBinhLuan;
    }

    public function update(TinhTrangBinhLuan $tinhTrangBinhLuan, array $data)
    {
      $tinhTrangBinhLuan->fill($data);

      $tinhTrangBinhLuan->save();

      return $tinhTrangBinhLuan;
    }
}
