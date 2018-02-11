<?php

namespace Api\Links\Repositories;

use Api\Links\Models\Link;
use Infrastructure\Database\Eloquent\Repository;

class LinkRepository extends Repository
{
  public function getModel()
  {
    return new Link();
    }

    public function create(array $data)
    {
      $link = $this->getModel();
      $link->fill($data);
      $link->save();

      return $link;
    }

    public function update(Link $link, array $data)
    {
      $link->fill($data);

      $link->save();

      return $link;
    }
}
