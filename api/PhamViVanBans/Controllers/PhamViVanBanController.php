<?php

namespace Api\PhamViVanBans\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\PhamViVanBans\Requests\CreatePhamViVanBanRequest;
use Api\PhamViVanBans\Services\PhamViVanBanService;

class PhamViVanBanController extends Controller
{
  private $phamViVanBanService;

  public function __construct(PhamViVanBanService $phamViVanBanService)
  {
    $this->phamViVanBanService = $phamViVanBanService;
  }

  public function getAll()
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->phamViVanBanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'phamViVanBans');

    return $this->response($parsedData);
  }

  public function getById($phamViVanBanId)
  {
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->phamViVanBanService->getById($phamViVanBanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'phamViVanBan');

    return $this->response($parsedData);
  }

  public function create(CreatePhamViVanBanRequest $request)
  {
    $data = $request->get('phamViVanBan', []);

    return $this->response($this->phamViVanBanService->create($data), 201);
  }

  public function update($phamViVanBanId, Request $request)
  {
    $data = $request->get('phamViVanBan', []);

    return $this->response($this->phamViVanBanService->update($phamViVanBanId, $data));
  }

  public function delete($phamViVanBanId)
  {
    return $this->response($this->phamViVanBanService->delete($phamViVanBanId));
  }
}
