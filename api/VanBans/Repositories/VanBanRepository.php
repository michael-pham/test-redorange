<?php

namespace Api\VanBans\Repositories;

use Api\VanBans\Models\VanBan;
use Infrastructure\Database\Eloquent\Repository;

class VanBanRepository extends Repository
{
  public function getModel()
  {
    return new VanBan();
    }

    public function create(array $data)
    {
      $vanBan = $this->getModel();
      $vanBan->fill($data);
      $vanBan->save();

      return $vanBan;
    }

    public function update(VanBan $vanBan, array $data)
    {
      $vanBan->fill($data);

      $vanBan->save();

      return $vanBan;
    }
}
