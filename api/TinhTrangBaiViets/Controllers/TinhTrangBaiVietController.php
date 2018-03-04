<?php

namespace Api\TinhTrangBaiViets\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\TinhTrangBaiViets\Requests\CreateTinhTrangBaiVietRequest;
use Api\TinhTrangBaiViets\Services\TinhTrangBaiVietService;
use Api\TinhTrangBaiViets\Exceptions\TinhTrangBaiVietUnauthorizedException;

class TinhTrangBaiVietController extends Controller
{
  private $tinhTrangBaiVietService;

  public function __construct(TinhTrangBaiVietService $tinhTrangBaiVietService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->tinhTrangBaiVietService = $tinhTrangBaiVietService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_tinh_trang_bai_viet')) {
      throw new TinhTrangBaiVietUnauthorizedException("Bạn không có quyền truy xuất danh sách TinhTrangBaiViet");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangBaiVietService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangBaiViets');

    return $this->response($parsedData);
  }

  public function getById($tinhTrangBaiVietId)
  {
    if (!$this->auth->user()->can('read_tinh_trang_bai_viet')) {
      throw new TinhTrangBaiVietUnauthorizedException("Bạn không có quyền truy xuất TinhTrangBaiViet");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangBaiVietService->getById($tinhTrangBaiVietId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangBaiViet');

    return $this->response($parsedData);
  }

  public function create(CreateTinhTrangBaiVietRequest $request)
  {
    if (!$this->auth->user()->can('create_tinh_trang_bai_viet')) {
      throw new TinhTrangBaiVietUnauthorizedException("Bạn không có quyền tạo mới TinhTrangBaiViet");
    }

    $data = $request->get('tinhTrangBaiViet', []);

    return $this->response($this->tinhTrangBaiVietService->create($data), 201);
  }

  public function update($tinhTrangBaiVietId, Request $request)
  {
    if (!$this->auth->user()->can('update_tinh_trang_bai_viet')) {
      throw new TinhTrangBaiVietUnauthorizedException("Bạn không có quyền cập nhật TinhTrangBaiViet");
    }

    $data = $request->get('tinhTrangBaiViet', []);

    return $this->response($this->tinhTrangBaiVietService->update($tinhTrangBaiVietId, $data));
  }

  public function delete($tinhTrangBaiVietId)
  {
    if (!$this->auth->user()->can('delete_tinh_trang_bai_viet')) {
      throw new TinhTrangBaiVietUnauthorizedException("Bạn không có quyền xóa TinhTrangBaiViet");
    }

    return $this->response($this->tinhTrangBaiVietService->delete($tinhTrangBaiVietId));
  }
}
