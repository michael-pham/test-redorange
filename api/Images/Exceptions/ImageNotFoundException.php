<?php

namespace Api\Images\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ImageNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The image was not found.');
    }
}
