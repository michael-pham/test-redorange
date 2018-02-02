<?php
$router->post('/tinh_trang_van_bans', 'TinhTrangVanBanController@create');
$router->put('/tinh_trang_van_bans/{id}', 'TinhTrangVanBanController@update');
$router->delete('/tinh_trang_van_bans/{id}', 'TinhTrangVanBanController@delete');
$router->get('/tinh_trang_van_bans', 'TinhTrangVanBanController@getAll');
$router->get('/tinh_trang_van_bans/{id}', 'TinhTrangVanBanController@getById');
