<?php

$router->get('/permissions', 'PermissionController@getAll');
$router->get('/permissions/{id}', 'PermissionController@getById');
