<?php

namespace Api\Projects\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\Projects\Requests\CreateProjectRequest;
use Api\Projects\Services\ProjectService;

class ProjectController extends Controller
{
  private $projectService;

  public function __construct(ProjectService $projectService)
  {
    $this->projectService = $projectService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->projectService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'projects');

    return $this->response($parsedData);
  }

  public function getById($projectId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->projectService->getById($projectId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'project');

    return $this->response($parsedData);
  }

  public function create(CreateProjectRequest $request)
  {
    $data = $request->get('project', []);

    return $this->response($this->projectService->create($data), 201);
  }

  public function update($projectId, Request $request)
  {
    $data = $request->get('project', []);

    return $this->response($this->projectService->update($projectId, $data));
  }

  public function delete($projectId)
  {
    return $this->response($this->projectService->delete($projectId));
  }

  public function buildProject($projectId) {
    return $this->response($this->projectService->buildProject($projectId));
  }

  public function showUpdateFormCode(Request $request) {
    $model = $request->get('model');
    return $this->response($this->projectService->showUpdateFormCode($model));
  }

  public function showListingTableCode(Request $request) {
    $model = $request->get('model');
    return $this->response($this->projectService->showListingTableCode($model));
  }

  public function showCreateFormCode(Request $request) {
    $model = $request->get('model');
    return $this->response($this->projectService->showCreateFormCode($model));
  }
}
