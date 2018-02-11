<?php

namespace Api\Links\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LinkNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The link was not found.');
    }
}
