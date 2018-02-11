<?php
$router->post('/links', 'LinkController@create');
$router->put('/links/{id}', 'LinkController@update');
$router->delete('/links/{id}', 'LinkController@delete');
$router->get('/links', 'LinkController@getAll');
$router->get('/links/{id}', 'LinkController@getById');
