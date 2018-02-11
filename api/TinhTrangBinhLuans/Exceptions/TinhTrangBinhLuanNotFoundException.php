<?php

namespace Api\TinhTrangBinhLuans\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TinhTrangBinhLuanNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The tinhTrangBinhLuan was not found.');
    }
}
