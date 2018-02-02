<?php

namespace Api\LoaiVanBans\Exceptions;

use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class LoaiVanBanNotFoundException extends NotFoundHttpException
{
  public function __construct()
  {
    parent::__construct('The loaiVanBan was not found.');
    }
}
