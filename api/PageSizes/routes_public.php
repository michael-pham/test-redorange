<?php

$router->get('/page_sizes', 'PageSizeController@getAll');
$router->get('/page_sizes/{id}', 'PageSizeController@getById');
