<?php

namespace Api\TinhTrangVanBans\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TinhTrangVanBanNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The tinhTrangVanBan was not found.');
    }
}
