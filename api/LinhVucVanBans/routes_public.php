<?php

$router->get('/linh_vuc_van_bans', 'LinhVucVanBanController@getAll');
$router->get('/linh_vuc_van_bans/{id}', 'LinhVucVanBanController@getById');
