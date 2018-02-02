<?php
$router->post('/nganhs', 'NganhController@create');
$router->put('/nganhs/{id}', 'NganhController@update');
$router->delete('/nganhs/{id}', 'NganhController@delete');
$router->get('/nganhs', 'NganhController@getAll');
$router->get('/nganhs/{id}', 'NganhController@getById');
