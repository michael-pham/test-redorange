<?php

namespace Api\TinhTrangVanBans\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\TinhTrangVanBans\Requests\CreateTinhTrangVanBanRequest;
use Api\TinhTrangVanBans\Services\TinhTrangVanBanService;

class TinhTrangVanBanController extends Controller
{
  private $tinhTrangVanBanService;

  public function __construct(TinhTrangVanBanService $tinhTrangVanBanService)
  {
    $this->tinhTrangVanBanService = $tinhTrangVanBanService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangVanBanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangVanBans');

    return $this->response($parsedData);
  }

  public function getById($tinhTrangVanBanId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->tinhTrangVanBanService->getById($tinhTrangVanBanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'tinhTrangVanBan');

    return $this->response($parsedData);
  }

  public function create(CreateTinhTrangVanBanRequest $request)
  {
    $data = $request->get('tinhTrangVanBan', []);

    return $this->response($this->tinhTrangVanBanService->create($data), 201);
  }

  public function update($tinhTrangVanBanId, Request $request)
  {
    $data = $request->get('tinhTrangVanBan', []);

    return $this->response($this->tinhTrangVanBanService->update($tinhTrangVanBanId, $data));
  }

  public function delete($tinhTrangVanBanId)
  {
    return $this->response($this->tinhTrangVanBanService->delete($tinhTrangVanBanId));
  }
}
