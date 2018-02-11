<?php

namespace Api\LinkTargets\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\LinkTargets\Requests\CreateLinkTargetRequest;
use Api\LinkTargets\Services\LinkTargetService;

class LinkTargetController extends Controller
{
  private $linkTargetService;

  public function __construct(LinkTargetService $linkTargetService)
  {
    $this->linkTargetService = $linkTargetService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_link_target')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkTargetService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'linkTargets');

    return $this->response($parsedData);
  }

  public function getById($linkTargetId)
  {
    if (!$this->auth->user()->can('read_link_target')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkTargetService->getById($linkTargetId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'linkTarget');

    return $this->response($parsedData);
  }

  public function create(CreateLinkTargetRequest $request)
  {
    if (!$this->auth->user()->can('create_link_target')) return;

    $data = $request->get('linkTarget', []);

    return $this->response($this->linkTargetService->create($data), 201);
  }

  public function update($linkTargetId, Request $request)
  {
    if (!$this->auth->user()->can('update_link_target')) return;

    $data = $request->get('linkTarget', []);

    return $this->response($this->linkTargetService->update($linkTargetId, $data));
  }

  public function delete($linkTargetId)
  {
    if (!$this->auth->user()->can('delete_link_target')) return;

    return $this->response($this->linkTargetService->delete($linkTargetId));
  }
}
