<?php

namespace Api\BieuMauChungTus\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\BieuMauChungTus\Requests\CreateBieuMauChungTuRequest;
use Api\BieuMauChungTus\Services\BieuMauChungTuService;

class BieuMauChungTuController extends Controller
{
  private $bieuMauChungTuService;

  public function __construct(BieuMauChungTuService $bieuMauChungTuService)
  {
    $this->bieuMauChungTuService = $bieuMauChungTuService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->bieuMauChungTuService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'bieuMauChungTus');

    return $this->response($parsedData);
  }

  public function getById($bieuMauChungTuId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->bieuMauChungTuService->getById($bieuMauChungTuId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'bieuMauChungTu');

    return $this->response($parsedData);
  }

  public function create(CreateBieuMauChungTuRequest $request)
  {
    $data = $request->get('bieuMauChungTu', []);

    return $this->response($this->bieuMauChungTuService->create($data), 201);
  }

  public function update($bieuMauChungTuId, Request $request)
  {
    $data = $request->get('bieuMauChungTu', []);

    return $this->response($this->bieuMauChungTuService->update($bieuMauChungTuId, $data));
  }

  public function delete($bieuMauChungTuId)
  {
    return $this->response($this->bieuMauChungTuService->delete($bieuMauChungTuId));
  }
}
