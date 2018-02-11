<?php
$router->post('/tinh_trang_binh_luans', 'TinhTrangBinhLuanController@create');
$router->put('/tinh_trang_binh_luans/{id}', 'TinhTrangBinhLuanController@update');
$router->delete('/tinh_trang_binh_luans/{id}', 'TinhTrangBinhLuanController@delete');
$router->get('/tinh_trang_binh_luans', 'TinhTrangBinhLuanController@getAll');
$router->get('/tinh_trang_binh_luans/{id}', 'TinhTrangBinhLuanController@getById');
