<?php

namespace Api\PhamViVanBans\Repositories;

use Api\PhamViVanBans\Models\PhamViVanBan;
use Infrastructure\Database\Eloquent\Repository;

class PhamViVanBanRepository extends Repository
{
  public function getModel()
  {
    return new PhamViVanBan();
    }

    public function create(array $data)
    {
      $phamViVanBan = $this->getModel();
      $phamViVanBan->fill($data);
      $phamViVanBan->save();

      return $phamViVanBan;
    }

    public function update(PhamViVanBan $phamViVanBan, array $data)
    {
      $phamViVanBan->fill($data);

      $phamViVanBan->save();

      return $phamViVanBan;
    }
}
