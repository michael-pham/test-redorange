<?php

namespace Api\LoaiVanBans\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\LoaiVanBans\Requests\CreateLoaiVanBanRequest;
use Api\LoaiVanBans\Services\LoaiVanBanService;

class LoaiVanBanController extends Controller
{
  private $loaiVanBanService;

  public function __construct(LoaiVanBanService $loaiVanBanService)
  {
    $this->loaiVanBanService = $loaiVanBanService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->loaiVanBanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'loaiVanBans');

    return $this->response($parsedData);
  }

  public function getById($loaiVanBanId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->loaiVanBanService->getById($loaiVanBanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'loaiVanBan');

    return $this->response($parsedData);
  }

  public function create(CreateLoaiVanBanRequest $request)
  {
    $data = $request->get('loaiVanBan', []);

    return $this->response($this->loaiVanBanService->create($data), 201);
  }

  public function update($loaiVanBanId, Request $request)
  {
    $data = $request->get('loaiVanBan', []);

    return $this->response($this->loaiVanBanService->update($loaiVanBanId, $data));
  }

  public function delete($loaiVanBanId)
  {
    return $this->response($this->loaiVanBanService->delete($loaiVanBanId));
  }
}
