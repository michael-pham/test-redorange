<?php

$router->get('/file_dinh_kem_bai_viets', 'FileDinhKemBaiVietController@getAll');
$router->get('/file_dinh_kem_bai_viets/{id}', 'FileDinhKemBaiVietController@getById');
