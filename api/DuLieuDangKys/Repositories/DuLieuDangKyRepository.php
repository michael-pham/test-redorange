<?php

namespace Api\DuLieuDangKys\Repositories;

use Api\DuLieuDangKys\Models\DuLieuDangKy;
use Infrastructure\Database\Eloquent\Repository;

class DuLieuDangKyRepository extends Repository
{
  public function getModel()
  {
    return new DuLieuDangKy();
    }

    public function create(array $data)
    {
      $duLieuDangKy = $this->getModel();
      $duLieuDangKy->fill($data);
      $duLieuDangKy->save();

      return $duLieuDangKy;
    }

    public function update(DuLieuDangKy $duLieuDangKy, array $data)
    {
      $duLieuDangKy->fill($data);

      $duLieuDangKy->save();

      return $duLieuDangKy;
    }
}
