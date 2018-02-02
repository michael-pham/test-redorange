<?php

$router->get('/van_bans', 'VanBanController@getAll');
$router->get('/van_bans/{id}', 'VanBanController@getById');
