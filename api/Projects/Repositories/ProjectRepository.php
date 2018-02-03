<?php

namespace Api\Projects\Repositories;

use Api\Projects\Models\Project;
use Infrastructure\Database\Eloquent\Repository;

class ProjectRepository extends Repository
{
  public function getModel()
  {
    return new Project();
    }

    public function create(array $data)
    {
      $project = $this->getModel();
      $project->fill($data);
      $project->save();

      return $project;
    }

    public function update(Project $project, array $data)
    {
      $project->fill($data);

      $project->save();

      return $project;
    }
}
