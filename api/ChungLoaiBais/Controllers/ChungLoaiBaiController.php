<?php

namespace Api\ChungLoaiBais\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\ChungLoaiBais\Requests\CreateChungLoaiBaiRequest;
use Api\ChungLoaiBais\Services\ChungLoaiBaiService;

class ChungLoaiBaiController extends Controller
{
  private $chungLoaiBaiService;

  public function __construct(ChungLoaiBaiService $chungLoaiBaiService)
  {
    $this->chungLoaiBaiService = $chungLoaiBaiService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_chung_loai_bai')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->chungLoaiBaiService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'chungLoaiBais');

    return $this->response($parsedData);
  }

  public function getById($chungLoaiBaiId)
  {
    if (!$this->auth->user()->can('read_chung_loai_bai')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->chungLoaiBaiService->getById($chungLoaiBaiId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'chungLoaiBai');

    return $this->response($parsedData);
  }

  public function create(CreateChungLoaiBaiRequest $request)
  {
    if (!$this->auth->user()->can('create_chung_loai_bai')) return;

    $data = $request->get('chungLoaiBai', []);

    return $this->response($this->chungLoaiBaiService->create($data), 201);
  }

  public function update($chungLoaiBaiId, Request $request)
  {
    if (!$this->auth->user()->can('update_chung_loai_bai')) return;

    $data = $request->get('chungLoaiBai', []);

    return $this->response($this->chungLoaiBaiService->update($chungLoaiBaiId, $data));
  }

  public function delete($chungLoaiBaiId)
  {
    if (!$this->auth->user()->can('delete_chung_loai_bai')) return;

    return $this->response($this->chungLoaiBaiService->delete($chungLoaiBaiId));
  }
}
