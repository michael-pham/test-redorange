<?php

namespace Api\FileDinhKemBaiViets\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FileDinhKemBaiVietNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The fileDinhKemBaiViet was not found.');
    }
}
