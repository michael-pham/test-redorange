<?php

namespace Api\LinhVucVanBans\Repositories;

use Api\LinhVucVanBans\Models\LinhVucVanBan;
use Infrastructure\Database\Eloquent\Repository;

class LinhVucVanBanRepository extends Repository
{
  public function getModel()
  {
    return new LinhVucVanBan();
    }

    public function create(array $data)
    {
      $linhVucVanBan = $this->getModel();
      $linhVucVanBan->fill($data);
      $linhVucVanBan->save();

      return $linhVucVanBan;
    }

    public function update(LinhVucVanBan $linhVucVanBan, array $data)
    {
      $linhVucVanBan->fill($data);

      $linhVucVanBan->save();

      return $linhVucVanBan;
    }
}
