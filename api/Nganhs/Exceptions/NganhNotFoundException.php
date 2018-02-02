<?php

namespace Api\Nganhs\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class NganhNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The nganh was not found.');
    }
}
