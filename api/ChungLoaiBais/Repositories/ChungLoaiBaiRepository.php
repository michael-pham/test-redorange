<?php

namespace Api\ChungLoaiBais\Repositories;

use Api\ChungLoaiBais\Models\ChungLoaiBai;
use Infrastructure\Database\Eloquent\Repository;

class ChungLoaiBaiRepository extends Repository
{
  public function getModel()
  {
    return new ChungLoaiBai();
    }

    public function create(array $data)
    {
      $chungLoaiBai = $this->getModel();
      $chungLoaiBai->fill($data);
      $chungLoaiBai->save();

      return $chungLoaiBai;
    }

    public function update(ChungLoaiBai $chungLoaiBai, array $data)
    {
      $chungLoaiBai->fill($data);

      $chungLoaiBai->save();

      return $chungLoaiBai;
    }
}
