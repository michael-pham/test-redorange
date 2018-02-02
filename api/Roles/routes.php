<?php
$router->post('/roles', 'RoleController@create');
$router->post('/roles/{id}/permissions', 'RoleController@assignPermissions');
$router->put('/roles/{id}', 'RoleController@update');
$router->delete('/roles/{id}', 'RoleController@delete');
$router->get('/roles', 'RoleController@getAll');
$router->get('/roles/{id}', 'RoleController@getById');
