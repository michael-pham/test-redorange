<?php

namespace Api\ChungLoaiBais\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ChungLoaiBaiNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The chungLoaiBai was not found.');
    }
}
