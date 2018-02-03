<?php

namespace Api\Projects\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProjectNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The project was not found.');
    }
}
