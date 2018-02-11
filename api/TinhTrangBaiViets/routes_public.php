<?php

$router->get('/tinh_trang_bai_viets', 'TinhTrangBaiVietController@getAll');
$router->get('/tinh_trang_bai_viets/{id}', 'TinhTrangBaiVietController@getById');
