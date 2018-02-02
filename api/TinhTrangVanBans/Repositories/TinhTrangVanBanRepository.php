<?php

namespace Api\TinhTrangVanBans\Repositories;

use Api\TinhTrangVanBans\Models\TinhTrangVanBan;
use Infrastructure\Database\Eloquent\Repository;

class TinhTrangVanBanRepository extends Repository
{
  public function getModel()
  {
    return new TinhTrangVanBan();
    }

    public function create(array $data)
    {
      $tinhTrangVanBan = $this->getModel();
      $tinhTrangVanBan->fill($data);
      $tinhTrangVanBan->save();

      return $tinhTrangVanBan;
    }

    public function update(TinhTrangVanBan $tinhTrangVanBan, array $data)
    {
      $tinhTrangVanBan->fill($data);

      $tinhTrangVanBan->save();

      return $tinhTrangVanBan;
    }
}
