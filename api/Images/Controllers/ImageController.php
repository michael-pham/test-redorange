<?php

namespace Api\Images\Controllers;

use Illuminate\Http\Request;
use Infrastructure\Http\Controller;
use Api\Images\Requests\CreateImageRequest;
use Api\Images\Services\ImageService;
use Illuminate\Support\Facades\Input;
use Image;
use Response;

class ImageController extends Controller
{
    private $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function storeImage() {
      $file = Input::file('file');
      $destination = 'images';
      $size = $file->getSize();
      $filename = $file->getClientOriginalName();
      $extension = 'png';
      $fullName = $filename . '.' . $extension;
      $pathToFile = $destination . '/'. $fullName;
      $image = Image::make($file);
      $image->resize(90, 90);
      $upload_success = $image->encode('png')->save($destination .'/'.$fullName);
      if ($upload_success) {
        // Save image uri to the database
        $data = array(
          'image_uri' => $pathToFile,
        );
        $saveResult = $this->imageService->create($data);

        $json['file'] = array(
          'image_id' => $saveResult->id,
          'name' => $filename,
          'size' => $size,
          'url' => $pathToFile,
          'message' => 'Uploaded successfully'
        );
        return Response::json($json);
      } else {
        $json['file'] = array(
          'message' => 'error uploading image',
        );

        return Response::json($json, 202);
      }
    }
}
