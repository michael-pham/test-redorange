<?php

namespace Api\TruongDuLieus\Repositories;

use Api\TruongDuLieus\Models\TruongDuLieu;
use Infrastructure\Database\Eloquent\Repository;

class TruongDuLieuRepository extends Repository
{
  public function getModel()
  {
    return new TruongDuLieu();
    }

    public function create(array $data)
    {
      $truongDuLieu = $this->getModel();
      $truongDuLieu->fill($data);
      $truongDuLieu->save();

      return $truongDuLieu;
    }

    public function update(TruongDuLieu $truongDuLieu, array $data)
    {
      $truongDuLieu->fill($data);

      $truongDuLieu->save();

      return $truongDuLieu;
    }
}
