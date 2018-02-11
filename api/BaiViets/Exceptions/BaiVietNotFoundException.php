<?php

namespace Api\BaiViets\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class BaiVietNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The baiViet was not found.');
    }
}
