<?php

namespace Api\FontFamilys\Repositories;

use Api\FontFamilys\Models\FontFamily;
use Infrastructure\Database\Eloquent\Repository;

class FontFamilyRepository extends Repository
{
  public function getModel()
  {
    return new FontFamily();
    }

    public function create(array $data)
    {
      $fontFamily = $this->getModel();
      $fontFamily->fill($data);
      $fontFamily->save();

      return $fontFamily;
    }

    public function update(FontFamily $fontFamily, array $data)
    {
      $fontFamily->fill($data);

      $fontFamily->save();

      return $fontFamily;
    }
}
