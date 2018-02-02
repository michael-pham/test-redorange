<?php

namespace Api\TruongDuLieus\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\TruongDuLieus\Requests\CreateTruongDuLieuRequest;
use Api\TruongDuLieus\Services\TruongDuLieuService;

class TruongDuLieuController extends Controller
{
  private $truongDuLieuService;

  public function __construct(TruongDuLieuService $truongDuLieuService)
  {
    $this->truongDuLieuService = $truongDuLieuService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->truongDuLieuService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'truongDuLieus');

    return $this->response($parsedData);
  }

  public function getById($truongDuLieuId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->truongDuLieuService->getById($truongDuLieuId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'truongDuLieu');

    return $this->response($parsedData);
  }

  public function create(CreateTruongDuLieuRequest $request)
  {
    $data = $request->get('truongDuLieu', []);

    return $this->response($this->truongDuLieuService->create($data), 201);
  }

  public function update($truongDuLieuId, Request $request)
  {
    $data = $request->get('truongDuLieu', []);

    return $this->response($this->truongDuLieuService->update($truongDuLieuId, $data));
  }

  public function delete($truongDuLieuId)
  {
    return $this->response($this->truongDuLieuService->delete($truongDuLieuId));
  }
}
