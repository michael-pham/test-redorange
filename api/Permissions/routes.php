<?php
$router->post('/permissions', 'PermissionController@create');
$router->put('/permissions/{id}', 'PermissionController@update');
$router->delete('/permissions/{id}', 'PermissionController@delete');
$router->get('/permissions', 'PermissionController@getAll');
$router->get('/permissions/{id}', 'PermissionController@getById');
