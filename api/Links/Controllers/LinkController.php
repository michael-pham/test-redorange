<?php

namespace Api\Links\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\Links\Requests\CreateLinkRequest;
use Api\Links\Services\LinkService;

class LinkController extends Controller
{
  private $linkService;

  public function __construct(LinkService $linkService)
  {
    $this->linkService = $linkService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_link')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'links');

    return $this->response($parsedData);
  }

  public function getById($linkId)
  {
    if (!$this->auth->user()->can('read_link')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkService->getById($linkId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'link');

    return $this->response($parsedData);
  }

  public function create(CreateLinkRequest $request)
  {
    if (!$this->auth->user()->can('create_link')) return;

    $data = $request->get('link', []);

    return $this->response($this->linkService->create($data), 201);
  }

  public function update($linkId, Request $request)
  {
    if (!$this->auth->user()->can('update_link')) return;

    $data = $request->get('link', []);

    return $this->response($this->linkService->update($linkId, $data));
  }

  public function delete($linkId)
  {
    if (!$this->auth->user()->can('delete_link')) return;

    return $this->response($this->linkService->delete($linkId));
  }
}
