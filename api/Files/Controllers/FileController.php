<?php

namespace Api\Files\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\Files\Requests\CreateFileRequest;
use Api\Files\Services\FileService;
use Illuminate\Support\Facades\Input;
use File;
use Storage;
use Response;

class FileController extends Controller
{
    private $fileService;

    public function __construct(FileService $fileService)
    {
        $this->fileService = $fileService;
    }

    public function storeFile(Request $request) {
      if ($request->file('file')->isValid() && $request->hasFile('file')) {
        $path = Storage::disk('public')->put('files', $request->file('file'));
        $data = array(
          'file_uri' => $path,
          'type' => "pdf"
        );
        $saveResult = $this->fileService->create($data);

        $json['file'] = array(
          'file_id' => $saveResult->id,
          'file_uri' => $path
        );

        return Response::json($json);
      } else {
        $json['file'] = array(
          'message' => "File không hợp lệ."
        );
      }

      return Response::json($json, 500);
    }
}
