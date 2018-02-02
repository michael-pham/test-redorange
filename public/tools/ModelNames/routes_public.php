<?php

$router->get('/model_names', 'ModelNameController@getAll');
$router->get('/model_names/{id}', 'ModelNameController@getById');
