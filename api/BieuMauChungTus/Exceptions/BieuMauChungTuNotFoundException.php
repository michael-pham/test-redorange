<?php

namespace Api\BieuMauChungTus\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BieuMauChungTuNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The bieuMauChungTu was not found.');
    }
}
