<?php

namespace Api\Links\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\Links\Requests\CreateLinkRequest;
use Api\Links\Services\LinkService;
use Api\Links\Exceptions\LinkUnauthorizedException;

class LinkController extends Controller
{
  private $linkService;

  public function __construct(LinkService $linkService, AuthManager $auth)
  {
    $this->auth = $auth;
    $this->linkService = $linkService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_link')) {
      throw new LinkUnauthorizedException("Bạn không có quyền truy xuất danh sách Link");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'links');

    return $this->response($parsedData);
  }

  public function getById($linkId)
  {
    if (!$this->auth->user()->can('read_link')) {
      throw new LinkUnauthorizedException("Bạn không có quyền truy xuất Link");
    }

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->linkService->getById($linkId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'link');

    return $this->response($parsedData);
  }

  public function create(CreateLinkRequest $request)
  {
    if (!$this->auth->user()->can('create_link')) {
      throw new LinkUnauthorizedException("Bạn không có quyền tạo mới Link");
    }

    $data = $request->get('link', []);

    return $this->response($this->linkService->create($data), 201);
  }

  public function update($linkId, Request $request)
  {
    if (!$this->auth->user()->can('update_link')) {
      throw new LinkUnauthorizedException("Bạn không có quyền cập nhật Link");
    }

    $data = $request->get('link', []);

    return $this->response($this->linkService->update($linkId, $data));
  }

  public function delete($linkId)
  {
    if (!$this->auth->user()->can('delete_link')) {
      throw new LinkUnauthorizedException("Bạn không có quyền xóa Link");
    }

    return $this->response($this->linkService->delete($linkId));
  }
}
