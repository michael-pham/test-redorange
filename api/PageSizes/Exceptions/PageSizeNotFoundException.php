<?php

namespace Api\PageSizes\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageSizeNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The pageSize was not found.');
    }
}
