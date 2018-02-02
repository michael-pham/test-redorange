<?php

namespace Api\ModelNames\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\ModelNames\Requests\CreateModelNameRequest;
use Api\ModelNames\Services\ModelNameService;

class ModelNameController extends Controller
{
  private $modelNameService;

  public function __construct(ModelNameService $modelNameService)
  {
    $this->modelNameService = $modelNameService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_model_name')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->modelNameService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'modelNames');

    return $this->response($parsedData);
  }

  public function getById($modelNameId)
  {
    if (!$this->auth->user()->can('read_model_name')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->modelNameService->getById($modelNameId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'modelName');

    return $this->response($parsedData);
  }

  public function create(CreateModelNameRequest $request)
  {
    if (!$this->auth->user()->can('create_model_name')) return;

    $data = $request->get('modelName', []);

    return $this->response($this->modelNameService->create($data), 201);
  }

  public function update($modelNameId, Request $request)
  {
    if (!$this->auth->user()->can('update_model_name')) return;

    $data = $request->get('modelName', []);

    return $this->response($this->modelNameService->update($modelNameId, $data));
  }

  public function delete($modelNameId)
  {
    if (!$this->auth->user()->can('delete_model_name')) return;

    return $this->response($this->modelNameService->delete($modelNameId));
  }
}
