<?php

namespace Api\BinhLuans\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\BinhLuans\Requests\CreateBinhLuanRequest;
use Api\BinhLuans\Services\BinhLuanService;
use Api\BinhLuans\Exceptions\BinhLuanUnauthorizedException;

class BinhLuanController extends Controller
{
  private $binhLuanService;

  public function __construct(BinhLuanService $binhLuanService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->binhLuanService = $binhLuanService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_binh_luan')) {
      throw new BinhLuanUnauthorizedException("Bạn không có quyền truy xuất danh sách BinhLuan");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->binhLuanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'binhLuans');

    return $this->response($parsedData);
  }

  public function getById($binhLuanId)
  {
    if (!$this->auth->user()->can('read_binh_luan')) {
      throw new BinhLuanUnauthorizedException("Bạn không có quyền truy xuất BinhLuan");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->binhLuanService->getById($binhLuanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'binhLuan');

    return $this->response($parsedData);
  }

  public function create(CreateBinhLuanRequest $request)
  {
    if (!$this->auth->user()->can('create_binh_luan')) {
      throw new BinhLuanUnauthorizedException("Bạn không có quyền tạo mới BinhLuan");
    }

    $data = $request->get('binhLuan', []);

    return $this->response($this->binhLuanService->create($data), 201);
  }

  public function update($binhLuanId, Request $request)
  {
    if (!$this->auth->user()->can('update_binh_luan')) {
      throw new BinhLuanUnauthorizedException("Bạn không có quyền cập nhật BinhLuan");
    }

    $data = $request->get('binhLuan', []);

    return $this->response($this->binhLuanService->update($binhLuanId, $data));
  }

  public function delete($binhLuanId)
  {
    if (!$this->auth->user()->can('delete_binh_luan')) {
      throw new BinhLuanUnauthorizedException("Bạn không có quyền xóa BinhLuan");
    }

    return $this->response($this->binhLuanService->delete($binhLuanId));
  }
}
