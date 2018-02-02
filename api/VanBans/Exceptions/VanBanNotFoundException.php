<?php

namespace Api\VanBans\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class VanBanNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The vanBan was not found.');
    }
}
