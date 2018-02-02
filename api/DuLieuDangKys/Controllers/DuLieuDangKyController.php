<?php

namespace Api\DuLieuDangKys\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\DuLieuDangKys\Requests\CreateDuLieuDangKyRequest;
use Api\DuLieuDangKys\Services\DuLieuDangKyService;

class DuLieuDangKyController extends Controller
{
  private $duLieuDangKyService;

  public function __construct(DuLieuDangKyService $duLieuDangKyService)
  {
    $this->duLieuDangKyService = $duLieuDangKyService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->duLieuDangKyService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'duLieuDangKys');

    return $this->response($parsedData);
  }

  public function getById($duLieuDangKyId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->duLieuDangKyService->getById($duLieuDangKyId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'duLieuDangKy');

    return $this->response($parsedData);
  }

  public function create(CreateDuLieuDangKyRequest $request)
  {
    $data = $request->get('duLieuDangKy', []);

    return $this->response($this->duLieuDangKyService->create($data), 201);
  }

  public function update($duLieuDangKyId, Request $request)
  {
    $data = $request->get('duLieuDangKy', []);

    return $this->response($this->duLieuDangKyService->update($duLieuDangKyId, $data));
  }

  public function delete($duLieuDangKyId)
  {
    return $this->response($this->duLieuDangKyService->delete($duLieuDangKyId));
  }
}
