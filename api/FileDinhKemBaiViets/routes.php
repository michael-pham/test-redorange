<?php
$router->post('/file_dinh_kem_bai_viets', 'FileDinhKemBaiVietController@create');
$router->put('/file_dinh_kem_bai_viets/{id}', 'FileDinhKemBaiVietController@update');
$router->delete('/file_dinh_kem_bai_viets/{id}', 'FileDinhKemBaiVietController@delete');
$router->get('/file_dinh_kem_bai_viets', 'FileDinhKemBaiVietController@getAll');
$router->get('/file_dinh_kem_bai_viets/{id}', 'FileDinhKemBaiVietController@getById');
