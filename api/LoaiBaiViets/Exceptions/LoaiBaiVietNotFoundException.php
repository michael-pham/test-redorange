<?php

namespace Api\LoaiBaiViets\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LoaiBaiVietNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The loaiBaiViet was not found.');
    }
}
