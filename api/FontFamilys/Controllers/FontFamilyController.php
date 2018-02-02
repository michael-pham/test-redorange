<?php

namespace Api\FontFamilys\Controllers;

use Illuminate\Http\Request;
use Illuminate\Auth\AuthManager;
use Infrastructure\Http\Controller;
use Api\FontFamilys\Requests\CreateFontFamilyRequest;
use Api\FontFamilys\Services\FontFamilyService;

class FontFamilyController extends Controller
{
  private $fontFamilyService;

  public function __construct(FontFamilyService $fontFamilyService)
  {
    $this->fontFamilyService = $fontFamilyService;
  }

  public function getAll()
  {
    if (!$this->auth->user()->can('read_font_family')) return;

    $resourceOptions = $this->parseResourceOptions();

    $data = $this->fontFamilyService->getAll($resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'fontFamilys');

    return $this->response($parsedData);
  }

  public function getById($fontFamilyId)
  {
    if (!$this->auth->user()->can('read_font_family')) return;
    $resourceOptions = $this->parseResourceOptions();

    $data = $this->fontFamilyService->getById($fontFamilyId, $resourceOptions);
    $parsedData = $this->parseData($data, $resourceOptions, 'fontFamily');

    return $this->response($parsedData);
  }

  public function create(CreateFontFamilyRequest $request)
  {
    if (!$this->auth->user()->can('create_font_family')) return;

    $data = $request->get('fontFamily', []);

    return $this->response($this->fontFamilyService->create($data), 201);
  }

  public function update($fontFamilyId, Request $request)
  {
    if (!$this->auth->user()->can('update_font_family')) return;

    $data = $request->get('fontFamily', []);

    return $this->response($this->fontFamilyService->update($fontFamilyId, $data));
  }

  public function delete($fontFamilyId)
  {
    if (!$this->auth->user()->can('delete_font_family')) return;

    return $this->response($this->fontFamilyService->delete($fontFamilyId));
  }
}
