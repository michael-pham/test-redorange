<?php
$router->post('/projects', 'ProjectController@create');
$router->post('/build_project/{id}', 'ProjectController@buildProject');
$router->put('/projects/{id}', 'ProjectController@update');
$router->delete('/projects/{id}', 'ProjectController@delete');
$router->get('/projects', 'ProjectController@getAll');
$router->get('/projects/{id}', 'ProjectController@getById');
