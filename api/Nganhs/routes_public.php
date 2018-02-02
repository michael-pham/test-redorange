<?php

$router->get('/nganhs', 'NganhController@getAll');
$router->get('/nganhs/{id}', 'NganhController@getById');
