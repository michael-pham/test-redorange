<?php

namespace Api\LinhVucVanBans\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LinhVucVanBanNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The linhVucVanBan was not found.');
    }
}
