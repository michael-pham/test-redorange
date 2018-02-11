<?php

$router->get('/links', 'LinkController@getAll');
$router->get('/links/{id}', 'LinkController@getById');
