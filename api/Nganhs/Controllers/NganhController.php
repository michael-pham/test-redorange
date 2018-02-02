<?php

namespace Api\Nganhs\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\Nganhs\Requests\CreateNganhRequest;
use Api\Nganhs\Services\NganhService;

class NganhController extends Controller
{
  private $nganhService;

  public function __construct(NganhService $nganhService)
  {
    $this->nganhService = $nganhService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->nganhService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'nganhs');

    return $this->response($parsedData);
  }

  public function getById($nganhId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->nganhService->getById($nganhId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'nganh');

    return $this->response($parsedData);
  }

  public function create(CreateNganhRequest $request)
  {
    $data = $request->get('nganh', []);

    return $this->response($this->nganhService->create($data), 201);
  }

  public function update($nganhId, Request $request)
  {
    $data = $request->get('nganh', []);

    return $this->response($this->nganhService->update($nganhId, $data));
  }

  public function delete($nganhId)
  {
    return $this->response($this->nganhService->delete($nganhId));
  }
}
