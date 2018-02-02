<?php

namespace Api\MayIns\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class MayInNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The mayIn was not found.');
    }
}
