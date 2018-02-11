<?php

namespace Api\FileDinhKemBaiViets\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\FileDinhKemBaiViets\Requests\CreateFileDinhKemBaiVietRequest;
use Api\FileDinhKemBaiViets\Services\FileDinhKemBaiVietService;

class FileDinhKemBaiVietController extends Controller
{
  private $fileDinhKemBaiVietService;

  public function __construct(FileDinhKemBaiVietService $fileDinhKemBaiVietService)
  {
    $this->fileDinhKemBaiVietService = $fileDinhKemBaiVietService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_file_dinh_kem_bai_viet')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->fileDinhKemBaiVietService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'fileDinhKemBaiViets');

    return $this->response($parsedData);
  }

  public function getById($fileDinhKemBaiVietId)
  {
    if (!$this->auth->user()->can('read_file_dinh_kem_bai_viet')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->fileDinhKemBaiVietService->getById($fileDinhKemBaiVietId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'fileDinhKemBaiViet');

    return $this->response($parsedData);
  }

  public function create(CreateFileDinhKemBaiVietRequest $request)
  {
    if (!$this->auth->user()->can('create_file_dinh_kem_bai_viet')) return;

    $data = $request->get('fileDinhKemBaiViet', []);

    return $this->response($this->fileDinhKemBaiVietService->create($data), 201);
  }

  public function update($fileDinhKemBaiVietId, Request $request)
  {
    if (!$this->auth->user()->can('update_file_dinh_kem_bai_viet')) return;

    $data = $request->get('fileDinhKemBaiViet', []);

    return $this->response($this->fileDinhKemBaiVietService->update($fileDinhKemBaiVietId, $data));
  }

  public function delete($fileDinhKemBaiVietId)
  {
    if (!$this->auth->user()->can('delete_file_dinh_kem_bai_viet')) return;

    return $this->response($this->fileDinhKemBaiVietService->delete($fileDinhKemBaiVietId));
  }
}
