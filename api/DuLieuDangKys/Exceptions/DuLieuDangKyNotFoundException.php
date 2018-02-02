<?php

namespace Api\DuLieuDangKys\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DuLieuDangKyNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The duLieuDangKy was not found.');
    }
}
