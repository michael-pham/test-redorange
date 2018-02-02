<?php

namespace Api\CoQuanBanHanhs\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\CoQuanBanHanhs\Requests\CreateCoQuanBanHanhRequest;
use Api\CoQuanBanHanhs\Services\CoQuanBanHanhService;

class CoQuanBanHanhController extends Controller
{
  private $coQuanBanHanhService;

  public function __construct(CoQuanBanHanhService $coQuanBanHanhService)
  {
    $this->coQuanBanHanhService = $coQuanBanHanhService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->coQuanBanHanhService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'coQuanBanHanhs');

    return $this->response($parsedData);
  }

  public function getById($coQuanBanHanhId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->coQuanBanHanhService->getById($coQuanBanHanhId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'coQuanBanHanh');

    return $this->response($parsedData);
  }

  public function create(CreateCoQuanBanHanhRequest $request)
  {
    $data = $request->get('coQuanBanHanh', []);

    return $this->response($this->coQuanBanHanhService->create($data), 201);
  }

  public function update($coQuanBanHanhId, Request $request)
  {
    $data = $request->get('coQuanBanHanh', []);

    return $this->response($this->coQuanBanHanhService->update($coQuanBanHanhId, $data));
  }

  public function delete($coQuanBanHanhId)
  {
    return $this->response($this->coQuanBanHanhService->delete($coQuanBanHanhId));
  }
}
