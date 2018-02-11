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
      $project = $this->getRequestedProject($projectId);

      File::put(env("TOOL_PATH").'/models.json', $project->generating_data_refined);

      $command =
        escapeshellcmd(env("TOOL_PATH").'/codegen.py');
      $output = shell_exec($command);

      $command =
        escapeshellcmd(env("TOOL_PATH").'/frontend/codegen_ui.py');
      $output = shell_exec($command);

      $command =
        escapeshellcmd(env("TOOL_PATH").'/frontend/model_js/codegen_ui_model_js.py');
      $output = shell_exec($command);

      $command =
        escapeshellcmd(env("TOOL_PATH").'/frontend/controller_js/codegen_ui_controller_js.py');
      $output = shell_exec($command);

      echo $output;
    }

    public function showCreateFormCode($model) {
      File::put(env("TOOL_PATH").'/models.json', $model);

      $command = escapeshellcmd(env("TOOL_PATH").'/frontend/codegen_ui_create_form.py');
      $output = shell_exec($command);

      return ['create_form' => $output];
    }

    public function showUpdateFormCode($model) {
      File::put(env("TOOL_PATH").'/frontend/tmpModel.json', $model);

      $command = escapeshellcmd(env("TOOL_PATH").'/frontend/codegen_ui_update_form.py');
      $output = shell_exec($command);

      return ['update_form' => $output];
    }

    public function showListingTableCode($model) {
      File::put(env("TOOL_PATH").'/frontend/tmpModel.json', $model);

      $command = escapeshellcmd(env("TOOL_PATH").'/frontend/codegen_ui_listing_table.py');
      $output = shell_exec($command);

      return ['listing_table' => $output];
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
