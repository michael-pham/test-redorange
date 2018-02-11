<?php
$router->post('/link_targets', 'LinkTargetController@create');
$router->put('/link_targets/{id}', 'LinkTargetController@update');
$router->delete('/link_targets/{id}', 'LinkTargetController@delete');
$router->get('/link_targets', 'LinkTargetController@getAll');
$router->get('/link_targets/{id}', 'LinkTargetController@getById');
