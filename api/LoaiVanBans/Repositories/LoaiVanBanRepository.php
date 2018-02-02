<?php

namespace Api\LoaiVanBans\Repositories;

use Api\LoaiVanBans\Models\LoaiVanBan;
use Infrastructure\Database\Eloquent\Repository;

class LoaiVanBanRepository extends Repository
{
  public function getModel()
  {
    return new LoaiVanBan();
    }

    public function create(array $data)
    {
      $loaiVanBan = $this->getModel();
      $loaiVanBan->fill($data);
      $loaiVanBan->save();

      return $loaiVanBan;
    }

    public function update(LoaiVanBan $loaiVanBan, array $data)
    {
      $loaiVanBan->fill($data);

      $loaiVanBan->save();

      return $loaiVanBan;
    }
}
