<?php

namespace Api\TinhTrangBaiViets\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TinhTrangBaiVietNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The tinhTrangBaiViet was not found.');
    }
}
