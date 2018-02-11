<?php

namespace Api\TinhTrangBinhLuans\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\TinhTrangBinhLuans\Requests\CreateTinhTrangBinhLuanRequest;
use Api\TinhTrangBinhLuans\Services\TinhTrangBinhLuanService;

class TinhTrangBinhLuanController extends Controller
{
  private $tinhTrangBinhLuanService;

  public function __construct(TinhTrangBinhLuanService $tinhTrangBinhLuanService)
  {
    $this->tinhTrangBinhLuanService = $tinhTrangBinhLuanService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_tinh_trang_binh_luan')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangBinhLuanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangBinhLuans');

    return $this->response($parsedData);
  }

  public function getById($tinhTrangBinhLuanId)
  {
    if (!$this->auth->user()->can('read_tinh_trang_binh_luan')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangBinhLuanService->getById($tinhTrangBinhLuanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangBinhLuan');

    return $this->response($parsedData);
  }

  public function create(CreateTinhTrangBinhLuanRequest $request)
  {
    if (!$this->auth->user()->can('create_tinh_trang_binh_luan')) return;

    $data = $request->get('tinhTrangBinhLuan', []);

    return $this->response($this->tinhTrangBinhLuanService->create($data), 201);
  }

  public function update($tinhTrangBinhLuanId, Request $request)
  {
    if (!$this->auth->user()->can('update_tinh_trang_binh_luan')) return;

    $data = $request->get('tinhTrangBinhLuan', []);

    return $this->response($this->tinhTrangBinhLuanService->update($tinhTrangBinhLuanId, $data));
  }

  public function delete($tinhTrangBinhLuanId)
  {
    if (!$this->auth->user()->can('delete_tinh_trang_binh_luan')) return;

    return $this->response($this->tinhTrangBinhLuanService->delete($tinhTrangBinhLuanId));
  }
}
