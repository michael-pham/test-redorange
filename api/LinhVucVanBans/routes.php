<?php
$router->post('/linh_vuc_van_bans', 'LinhVucVanBanController@create');
$router->put('/linh_vuc_van_bans/{id}', 'LinhVucVanBanController@update');
$router->delete('/linh_vuc_van_bans/{id}', 'LinhVucVanBanController@delete');
$router->get('/linh_vuc_van_bans', 'LinhVucVanBanController@getAll');
$router->get('/linh_vuc_van_bans/{id}', 'LinhVucVanBanController@getById');
