<?php

namespace Api\Projects\Services;

use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\DatabaseManager;
use Illuminate\Events\Dispatcher;
use Api\Projects\Exceptions\ProjectNotFoundException;
use Api\Projects\Events\ProjectWasCreated;
use Api\Projects\Events\ProjectWasDeleted;
use Api\Projects\Events\ProjectWasUpdated;
use Api\Projects\Repositories\ProjectRepository;
use File;

class ProjectService
{
  private $auth;

  private $database;

  private $dispatcher;

  private $projectRepository;

  public function __construct(
    AuthManager $auth,
    DatabaseManager $database,
    Dispatcher $dispatcher,
    ProjectRepository $projectRepository
  ) {
    $this->auth = $auth;
    $this->database = $database;
    $this->dispatcher = $dispatcher;
    $this->projectRepository = $projectRepository;
    }

    public function getAll($options = [])
    {
      return $this->projectRepository->get($options);
    }

    public function getById($projectId, array $options = [])
    {
      $project = $this->getRequestedProject($projectId);

      return $project;
    }

    public function create($data)
    {
      $project = $this->projectRepository->create($data);

      $this->dispatcher->fire(new ProjectWasCreated($project));

      return $project;
    }

    public function update($projectId, array $data)
    {
      $project = $this->getRequestedProject($projectId);

      $this->projectRepository->update($project, $data);

      $this->dispatcher->fire(new ProjectWasUpdated($project));

      return $project;
    }

    public function delete($projectId)
    {
      $project = $this->getRequestedProject($projectId);

      $this->projectRepository->delete($projectId);

      $this->dispatcher->fire(new ProjectWasDeleted($project));
    }

    public function buildProject($projectId) {
      // $project = $this->getRequestedProject($projectId);
      //
      // File::put('/home/hbkhanh/workspace/codebase/public/tools/models.json',
      //   $project->generating_data_refined);
      //
      // $command =
      //   escapeshellcmd('/home/hbkhanh/workspace/codebase/public/tools/codegen.py');
      // $output = shell_exec($command);
      //
      // echo $output;
    }

    private function getRequestedProject($projectId)
    {
      $project = $this->projectRepository->getById($projectId);

      if (is_null($project)) {
        throw new ProjectNotFoundException();
        }

        return $project;
    }
}
