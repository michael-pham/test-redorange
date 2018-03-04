<?php

namespace Api\ModelNames\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\ModelNames\Requests\CreateModelNameRequest;
use Api\ModelNames\Services\ModelNameService;
use Api\ModelNames\Exceptions\ModelNameUnauthorizedException;

class ModelNameController extends Controller
{
  private $modelNameService;

  public function __construct(ModelNameService $modelNameService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->modelNameService = $modelNameService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_model_name')) {
      throw new ModelNameUnauthorizedException("Bạn không có quyền truy xuất danh sách ModelName");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->modelNameService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'modelNames');

    return $this->response($parsedData);
  }

  public function getById($modelNameId)
  {
    if (!$this->auth->user()->can('read_model_name')) {
      throw new ModelNameUnauthorizedException("Bạn không có quyền truy xuất ModelName");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->modelNameService->getById($modelNameId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'modelName');

    return $this->response($parsedData);
  }

  public function create(CreateModelNameRequest $request)
  {
    if (!$this->auth->user()->can('create_model_name')) {
      throw new ModelNameUnauthorizedException("Bạn không có quyền tạo mới ModelName");
    }

    $data = $request->get('modelName', []);

    return $this->response($this->modelNameService->create($data), 201);
  }

  public function update($modelNameId, Request $request)
  {
    if (!$this->auth->user()->can('update_model_name')) {
      throw new ModelNameUnauthorizedException("Bạn không có quyền cập nhật ModelName");
    }

    $data = $request->get('modelName', []);

    return $this->response($this->modelNameService->update($modelNameId, $data));
  }

  public function delete($modelNameId)
  {
    if (!$this->auth->user()->can('delete_model_name')) {
      throw new ModelNameUnauthorizedException("Bạn không có quyền xóa ModelName");
    }

    return $this->response($this->modelNameService->delete($modelNameId));
  }
}
