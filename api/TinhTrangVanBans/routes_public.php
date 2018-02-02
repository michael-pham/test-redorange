<?php

$router->get('/tinh_trang_van_bans', 'TinhTrangVanBanController@getAll');
$router->get('/tinh_trang_van_bans/{id}', 'TinhTrangVanBanController@getById');
