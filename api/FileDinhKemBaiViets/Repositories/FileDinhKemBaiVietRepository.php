<?php

namespace Api\FileDinhKemBaiViets\Repositories;

use Api\FileDinhKemBaiViets\Models\FileDinhKemBaiViet;
use Infrastructure\Database\Eloquent\Repository;

class FileDinhKemBaiVietRepository extends Repository
{
  public function getModel()
  {
    return new FileDinhKemBaiViet();
    }

    public function create(array $data)
    {
      $fileDinhKemBaiViet = $this->getModel();
      $fileDinhKemBaiViet->fill($data);
      $fileDinhKemBaiViet->save();

      return $fileDinhKemBaiViet;
    }

    public function update(FileDinhKemBaiViet $fileDinhKemBaiViet, array $data)
    {
      $fileDinhKemBaiViet->fill($data);

      $fileDinhKemBaiViet->save();

      return $fileDinhKemBaiViet;
    }
}
