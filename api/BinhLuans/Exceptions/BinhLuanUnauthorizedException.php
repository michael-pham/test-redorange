<?php

namespace Api\BinhLuans\Exceptions;

use Symfony\Component\HttpKernel\Exception\HttpException;

class BinhLuanUnauthorizedException extends HttpException
{
    public function __construct($message = null, \Exception $previous = null, $code = 0)
    {
        parent::__construct(401, $message, $previous, array(), $code);
    }
}
