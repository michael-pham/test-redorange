<?php

namespace Api\BieuMauChungTus\Repositories;

use Api\BieuMauChungTus\Models\BieuMauChungTu;
use Infrastructure\Database\Eloquent\Repository;

class BieuMauChungTuRepository extends Repository
{
  public function getModel()
  {
    return new BieuMauChungTu();
    }

    public function create(array $data)
    {
      $bieuMauChungTu = $this->getModel();
      $bieuMauChungTu->fill($data);
      $bieuMauChungTu->save();

      return $bieuMauChungTu;
    }

    public function update(BieuMauChungTu $bieuMauChungTu, array $data)
    {
      $bieuMauChungTu->fill($data);

      $bieuMauChungTu->save();

      return $bieuMauChungTu;
    }
}
