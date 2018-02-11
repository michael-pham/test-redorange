<?php

$router->get('/tinh_trang_binh_luans', 'TinhTrangBinhLuanController@getAll');
$router->get('/tinh_trang_binh_luans/{id}', 'TinhTrangBinhLuanController@getById');
