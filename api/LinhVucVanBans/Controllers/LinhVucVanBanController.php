<?php

namespace Api\LinhVucVanBans\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\LinhVucVanBans\Requests\CreateLinhVucVanBanRequest;
use Api\LinhVucVanBans\Services\LinhVucVanBanService;

class LinhVucVanBanController extends Controller
{
  private $linhVucVanBanService;

  public function __construct(LinhVucVanBanService $linhVucVanBanService)
  {
    $this->linhVucVanBanService = $linhVucVanBanService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linhVucVanBanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'linhVucVanBans');

    return $this->response($parsedData);
  }

  public function getById($linhVucVanBanId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linhVucVanBanService->getById($linhVucVanBanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'linhVucVanBan');

    return $this->response($parsedData);
  }

  public function create(CreateLinhVucVanBanRequest $request)
  {
    $data = $request->get('linhVucVanBan', []);

    return $this->response($this->linhVucVanBanService->create($data), 201);
  }

  public function update($linhVucVanBanId, Request $request)
  {
    $data = $request->get('linhVucVanBan', []);

    return $this->response($this->linhVucVanBanService->update($linhVucVanBanId, $data));
  }

  public function delete($linhVucVanBanId)
  {
    return $this->response($this->linhVucVanBanService->delete($linhVucVanBanId));
  }
}
