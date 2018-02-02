<?php

namespace Api\FontFamilys\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FontFamilyNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The fontFamily was not found.');
    }
}
