<?php
$router->post('/may_ins', 'MayInController@create');
$router->put('/may_ins/{id}', 'MayInController@update');
$router->delete('/may_ins/{id}', 'MayInController@delete');
$router->get('/may_ins', 'MayInController@getAll');
$router->get('/may_ins/{id}', 'MayInController@getById');
