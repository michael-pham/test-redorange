<?php
$router->post('/page_sizes', 'PageSizeController@create');
$router->put('/page_sizes/{id}', 'PageSizeController@update');
$router->delete('/page_sizes/{id}', 'PageSizeController@delete');
$router->get('/page_sizes', 'PageSizeController@getAll');
$router->get('/page_sizes/{id}', 'PageSizeController@getById');
