<?php

namespace Api\BaiViets\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\BaiViets\Requests\CreateBaiVietRequest;
use Api\BaiViets\Services\BaiVietService;
use Api\BaiViets\Exceptions\BaiVietUnauthorizedException;

class BaiVietController extends Controller
{
  private $baiVietService;

  public function __construct(BaiVietService $baiVietService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->baiVietService = $baiVietService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_bai_viet')) {
      throw new BaiVietUnauthorizedException("Bạn không có quyền truy xuất danh sách BaiViet");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->baiVietService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'baiViets');

    return $this->response($parsedData);
  }

  public function getById($baiVietId)
  {
    if (!$this->auth->user()->can('read_bai_viet')) {
      throw new BaiVietUnauthorizedException("Bạn không có quyền truy xuất BaiViet");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->baiVietService->getById($baiVietId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'baiViet');

    return $this->response($parsedData);
  }

  public function create(CreateBaiVietRequest $request)
  {
    if (!$this->auth->user()->can('create_bai_viet')) {
      throw new BaiVietUnauthorizedException("Bạn không có quyền tạo mới BaiViet");
    }

    $data = $request->get('baiViet', []);

    return $this->response($this->baiVietService->create($data), 201);
  }

  public function update($baiVietId, Request $request)
  {
    if (!$this->auth->user()->can('update_bai_viet')) {
      throw new BaiVietUnauthorizedException("Bạn không có quyền cập nhật BaiViet");
    }

    $data = $request->get('baiViet', []);

    return $this->response($this->baiVietService->update($baiVietId, $data));
  }

  public function delete($baiVietId)
  {
    if (!$this->auth->user()->can('delete_bai_viet')) {
      throw new BaiVietUnauthorizedException("Bạn không có quyền xóa BaiViet");
    }

    return $this->response($this->baiVietService->delete($baiVietId));
  }
}
