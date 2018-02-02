<?php
$router->post('/model_names', 'ModelNameController@create');
$router->put('/model_names/{id}', 'ModelNameController@update');
$router->delete('/model_names/{id}', 'ModelNameController@delete');
$router->get('/model_names', 'ModelNameController@getAll');
$router->get('/model_names/{id}', 'ModelNameController@getById');
