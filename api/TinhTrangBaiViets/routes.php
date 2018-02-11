<?php
$router->post('/tinh_trang_bai_viets', 'TinhTrangBaiVietController@create');
$router->put('/tinh_trang_bai_viets/{id}', 'TinhTrangBaiVietController@update');
$router->delete('/tinh_trang_bai_viets/{id}', 'TinhTrangBaiVietController@delete');
$router->get('/tinh_trang_bai_viets', 'TinhTrangBaiVietController@getAll');
$router->get('/tinh_trang_bai_viets/{id}', 'TinhTrangBaiVietController@getById');
