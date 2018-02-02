<?php

namespace Api\VanBans\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\VanBans\Requests\CreateVanBanRequest;
use Api\VanBans\Services\VanBanService;

class VanBanController extends Controller
{
  private $vanBanService;

  public function __construct(VanBanService $vanBanService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->vanBanService = $vanBanService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_van_ban')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->vanBanService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'vanBans');

    return $this->response($parsedData);
  }

  public function getById($vanBanId)
  {
    if (!$this->auth->user()->can('read_van_ban')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->vanBanService->getById($vanBanId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'vanBan');

    return $this->response($parsedData);
  }

  public function create(CreateVanBanRequest $request)
  {
    if (!$this->auth->user()->can('create_van_ban')) return;
    $data = $request->get('vanBan', []);

    return $this->response($this->vanBanService->create($data), 201);
  }

  public function update($vanBanId, Request $request)
  {
    if (!$this->auth->user()->can('update_van_ban')) return;
    $data = $request->get('vanBan', []);

    return $this->response($this->vanBanService->update($vanBanId, $data));
  }

  public function delete($vanBanId)
  {
    if (!$this->auth->user()->can('delete_van_ban')) return;
    return $this->response($this->vanBanService->delete($vanBanId));
  }
}
