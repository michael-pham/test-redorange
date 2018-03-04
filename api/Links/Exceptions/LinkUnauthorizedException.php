<?php

namespace Api\Links\Exceptions;

use Symfony\Component\HttpKernel\Exception\HttpException;

class LinkUnauthorizedException extends HttpException
{
    public function __construct($message = null, \Exception $previous = null, $code = 0)
    {
        parent::__construct(401, $message, $previous, array(), $code);
    }
}
