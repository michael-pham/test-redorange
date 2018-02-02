<?php

namespace Api\PhamViVanBans\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PhamViVanBanNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The phamViVanBan was not found.');
    }
}
