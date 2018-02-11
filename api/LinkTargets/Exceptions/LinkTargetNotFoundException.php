<?php

namespace Api\LinkTargets\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LinkTargetNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The linkTarget was not found.');
    }
}
