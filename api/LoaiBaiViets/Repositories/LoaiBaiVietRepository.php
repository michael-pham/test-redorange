<?php

namespace Api\LoaiBaiViets\Repositories;

use Api\LoaiBaiViets\Models\LoaiBaiViet;
use Infrastructure\Database\Eloquent\Repository;

class LoaiBaiVietRepository extends Repository
{
  public function getModel()
  {
    return new LoaiBaiViet();
    }

    public function create(array $data)
    {
      $loaiBaiViet = $this->getModel();
      $loaiBaiViet->fill($data);
      $loaiBaiViet->save();

      return $loaiBaiViet;
    }

    public function update(LoaiBaiViet $loaiBaiViet, array $data)
    {
      $loaiBaiViet->fill($data);

      $loaiBaiViet->save();

      return $loaiBaiViet;
    }
}
