<?php

namespace Api\LinkTargets\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\LinkTargets\Requests\CreateLinkTargetRequest;
use Api\LinkTargets\Services\LinkTargetService;
use Api\LinkTargets\Exceptions\LinkTargetUnauthorizedException;

class LinkTargetController extends Controller
{
  private $linkTargetService;

  public function __construct(LinkTargetService $linkTargetService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->linkTargetService = $linkTargetService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_link_target')) {
      throw new LinkTargetUnauthorizedException("Bạn không có quyền truy xuất danh sách LinkTarget");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkTargetService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'linkTargets');

    return $this->response($parsedData);
  }

  public function getById($linkTargetId)
  {
    if (!$this->auth->user()->can('read_link_target')) {
      throw new LinkTargetUnauthorizedException("Bạn không có quyền truy xuất LinkTarget");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkTargetService->getById($linkTargetId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'linkTarget');

    return $this->response($parsedData);
  }

  public function create(CreateLinkTargetRequest $request)
  {
    if (!$this->auth->user()->can('create_link_target')) {
      throw new LinkTargetUnauthorizedException("Bạn không có quyền tạo mới LinkTarget");
    }

    $data = $request->get('linkTarget', []);

    return $this->response($this->linkTargetService->create($data), 201);
  }

  public function update($linkTargetId, Request $request)
  {
    if (!$this->auth->user()->can('update_link_target')) {
      throw new LinkTargetUnauthorizedException("Bạn không có quyền cập nhật LinkTarget");
    }

    $data = $request->get('linkTarget', []);

    return $this->response($this->linkTargetService->update($linkTargetId, $data));
  }

  public function delete($linkTargetId)
  {
    if (!$this->auth->user()->can('delete_link_target')) {
      throw new LinkTargetUnauthorizedException("Bạn không có quyền xóa LinkTarget");
    }

    return $this->response($this->linkTargetService->delete($linkTargetId));
  }
}
