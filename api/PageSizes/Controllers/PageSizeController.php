<?php

namespace Api\PageSizes\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\PageSizes\Requests\CreatePageSizeRequest;
use Api\PageSizes\Services\PageSizeService;

class PageSizeController extends Controller
{
  private $pageSizeService;

  public function __construct(PageSizeService $pageSizeService)
  {
    $this->pageSizeService = $pageSizeService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->pageSizeService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'pageSizes');

    return $this->response($parsedData);
  }

  public function getById($pageSizeId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->pageSizeService->getById($pageSizeId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'pageSize');

    return $this->response($parsedData);
  }

  public function create(CreatePageSizeRequest $request)
  {
    $data = $request->get('pageSize', []);

    return $this->response($this->pageSizeService->create($data), 201);
  }

  public function update($pageSizeId, Request $request)
  {
    $data = $request->get('pageSize', []);

    return $this->response($this->pageSizeService->update($pageSizeId, $data));
  }

  public function delete($pageSizeId)
  {
    return $this->response($this->pageSizeService->delete($pageSizeId));
  }
}
