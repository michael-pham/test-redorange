<?php

namespace Api\LoaiBaiViets\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\LoaiBaiViets\Requests\CreateLoaiBaiVietRequest;
use Api\LoaiBaiViets\Services\LoaiBaiVietService;
use Api\LoaiBaiViets\Exceptions\LoaiBaiVietUnauthorizedException;

class LoaiBaiVietController extends Controller
{
  private $loaiBaiVietService;

  public function __construct(LoaiBaiVietService $loaiBaiVietService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->loaiBaiVietService = $loaiBaiVietService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_loai_bai_viet')) {
      throw new LoaiBaiVietUnauthorizedException("Bạn không có quyền truy xuất danh sách LoaiBaiViet");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->loaiBaiVietService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'loaiBaiViets');

    return $this->response($parsedData);
  }

  public function getById($loaiBaiVietId)
  {
    if (!$this->auth->user()->can('read_loai_bai_viet')) {
      throw new LoaiBaiVietUnauthorizedException("Bạn không có quyền truy xuất LoaiBaiViet");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->loaiBaiVietService->getById($loaiBaiVietId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'loaiBaiViet');

    return $this->response($parsedData);
  }

  public function create(CreateLoaiBaiVietRequest $request)
  {
    if (!$this->auth->user()->can('create_loai_bai_viet')) {
      throw new LoaiBaiVietUnauthorizedException("Bạn không có quyền tạo mới LoaiBaiViet");
    }

    $data = $request->get('loaiBaiViet', []);

    return $this->response($this->loaiBaiVietService->create($data), 201);
  }

  public function update($loaiBaiVietId, Request $request)
  {
    if (!$this->auth->user()->can('update_loai_bai_viet')) {
      throw new LoaiBaiVietUnauthorizedException("Bạn không có quyền cập nhật LoaiBaiViet");
    }

    $data = $request->get('loaiBaiViet', []);

    return $this->response($this->loaiBaiVietService->update($loaiBaiVietId, $data));
  }

  public function delete($loaiBaiVietId)
  {
    if (!$this->auth->user()->can('delete_loai_bai_viet')) {
      throw new LoaiBaiVietUnauthorizedException("Bạn không có quyền xóa LoaiBaiViet");
    }

    return $this->response($this->loaiBaiVietService->delete($loaiBaiVietId));
  }
}
