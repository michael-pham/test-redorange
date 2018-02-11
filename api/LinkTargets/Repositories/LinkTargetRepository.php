<?php

namespace Api\LinkTargets\Repositories;

use Api\LinkTargets\Models\LinkTarget;
use Infrastructure\Database\Eloquent\Repository;

class LinkTargetRepository extends Repository
{
  public function getModel()
  {
    return new LinkTarget();
    }

    public function create(array $data)
    {
      $linkTarget = $this->getModel();
      $linkTarget->fill($data);
      $linkTarget->save();

      return $linkTarget;
    }

    public function update(LinkTarget $linkTarget, array $data)
    {
      $linkTarget->fill($data);

      $linkTarget->save();

      return $linkTarget;
    }
}
