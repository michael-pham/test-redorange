<?php

namespace Api\Files\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FileNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The file was not found.');
    }
}
