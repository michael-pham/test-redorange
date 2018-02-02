<?php

$router->get('/roles', 'RoleController@getAll');
$router->get('/roles/{id}', 'RoleController@getById');
