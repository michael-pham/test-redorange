<?php

namespace Api\ModelNames\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ModelNameNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The modelName was not found.');
    }
}
