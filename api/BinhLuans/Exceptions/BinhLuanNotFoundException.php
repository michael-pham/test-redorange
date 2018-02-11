<?php

namespace Api\BinhLuans\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BinhLuanNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The binhLuan was not found.');
    }
}
