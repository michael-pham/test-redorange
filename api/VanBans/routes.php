<?php
$router->post('/van_bans', 'VanBanController@create');
$router->put('/van_bans/{id}', 'VanBanController@update');
$router->delete('/van_bans/{id}', 'VanBanController@delete');
$router->get('/van_bans', 'VanBanController@getAll');
$router->get('/van_bans/{id}', 'VanBanController@getById');
