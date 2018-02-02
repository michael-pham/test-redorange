<?php

namespace Api\TruongDuLieus\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TruongDuLieuNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The truongDuLieu was not found.');
    }
}
