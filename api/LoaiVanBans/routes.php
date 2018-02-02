<?php
$router->post('/loai_van_bans', 'LoaiVanBanController@create');
$router->put('/loai_van_bans/{id}', 'LoaiVanBanController@update');
$router->delete('/loai_van_bans/{id}', 'LoaiVanBanController@delete');
$router->get('/loai_van_bans', 'LoaiVanBanController@getAll');
$router->get('/loai_van_bans/{id}', 'LoaiVanBanController@getById');
