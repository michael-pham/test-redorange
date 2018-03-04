<?php

namespace Api\TinhTrangBinhLuans\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\TinhTrangBinhLuans\Requests\CreateTinhTrangBinhLuanRequest;
use Api\TinhTrangBinhLuans\Services\TinhTrangBinhLuanService;
use Api\TinhTrangBinhLuans\Exceptions\TinhTrangBinhLuanUnauthorizedException;

class TinhTrangBinhLuanController extends Controller
{
  private $tinhTrangBinhLuanService;

  public function __construct(TinhTrangBinhLuanService $tinhTrangBinhLuanService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->tinhTrangBinhLuanService = $tinhTrangBinhLuanService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_tinh_trang_binh_luan')) {
      throw new TinhTrangBinhLuanUnauthorizedException("Bạn không có quyền truy xuất danh sách TinhTrangBinhLuan");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangBinhLuanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangBinhLuans');

    return $this->response($parsedData);
  }

  public function getById($tinhTrangBinhLuanId)
  {
    if (!$this->auth->user()->can('read_tinh_trang_binh_luan')) {
      throw new TinhTrangBinhLuanUnauthorizedException("Bạn không có quyền truy xuất TinhTrangBinhLuan");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangBinhLuanService->getById($tinhTrangBinhLuanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangBinhLuan');

    return $this->response($parsedData);
  }

  public function create(CreateTinhTrangBinhLuanRequest $request)
  {
    if (!$this->auth->user()->can('create_tinh_trang_binh_luan')) {
      throw new TinhTrangBinhLuanUnauthorizedException("Bạn không có quyền tạo mới TinhTrangBinhLuan");
    }

    $data = $request->get('tinhTrangBinhLuan', []);

    return $this->response($this->tinhTrangBinhLuanService->create($data), 201);
  }

  public function update($tinhTrangBinhLuanId, Request $request)
  {
    if (!$this->auth->user()->can('update_tinh_trang_binh_luan')) {
      throw new TinhTrangBinhLuanUnauthorizedException("Bạn không có quyền cập nhật TinhTrangBinhLuan");
    }

    $data = $request->get('tinhTrangBinhLuan', []);

    return $this->response($this->tinhTrangBinhLuanService->update($tinhTrangBinhLuanId, $data));
  }

  public function delete($tinhTrangBinhLuanId)
  {
    if (!$this->auth->user()->can('delete_tinh_trang_binh_luan')) {
      throw new TinhTrangBinhLuanUnauthorizedException("Bạn không có quyền xóa TinhTrangBinhLuan");
    }

    return $this->response($this->tinhTrangBinhLuanService->delete($tinhTrangBinhLuanId));
  }
}
