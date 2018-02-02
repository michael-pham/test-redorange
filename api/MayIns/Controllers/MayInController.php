<?php

namespace Api\MayIns\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\MayIns\Requests\CreateMayInRequest;
use Api\MayIns\Services\MayInService;

class MayInController extends Controller
{
  private $mayInService;

  public function __construct(MayInService $mayInService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->mayInService = $mayInService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->mayInService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'mayIns');

    return $this->response($parsedData);
  }

  public function getById($mayInId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->mayInService->getById($mayInId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'mayIn');

    return $this->response($parsedData);
  }

  public function create(CreateMayInRequest $request)
  {
    $data = $request->get('mayIn', []);

    return $this->response($this->mayInService->create($data), 201);
  }

  public function update($mayInId, Request $request)
  {
    $data = $request->get('mayIn', []);
    return $this->response($this->mayInService->update($mayInId, $data));
  }

  public function delete($mayInId)
  {
    return $this->response($this->mayInService->delete($mayInId));
  }
}
