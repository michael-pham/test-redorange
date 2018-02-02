<?php

namespace Api\CoQuanBanHanhs\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class CoQuanBanHanhNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The coQuanBanHanh was not found.');
    }
}
