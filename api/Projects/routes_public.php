<?php

$router->get('/projects', 'ProjectController@getAll');
$router->get('/projects/{id}', 'ProjectController@getById');
