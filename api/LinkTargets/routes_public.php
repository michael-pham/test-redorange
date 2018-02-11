<?php

$router->get('/link_targets', 'LinkTargetController@getAll');
$router->get('/link_targets/{id}', 'LinkTargetController@getById');
