<?php

$router->get('/may_ins', 'MayInController@getAll');
$router->get('/may_ins/{id}', 'MayInController@getById');
