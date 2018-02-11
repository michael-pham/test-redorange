<?php

namespace Api\BinhLuans\Repositories;

use Api\BinhLuans\Models\BinhLuan;
use Infrastructure\Database\Eloquent\Repository;

class BinhLuanRepository extends Repository
{
  public function getModel()
  {
    return new BinhLuan();
    }

    public function create(array $data)
    {
      $binhLuan = $this->getModel();
      $binhLuan->fill($data);
      $binhLuan->save();

      return $binhLuan;
    }

    public function update(BinhLuan $binhLuan, array $data)
    {
      $binhLuan->fill($data);

      $binhLuan->save();

      return $binhLuan;
    }
}
