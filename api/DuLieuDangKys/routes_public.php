<?php

$router->get('/du_lieu_dang_kys', 'DuLieuDangKyController@getAll');
$router->get('/du_lieu_dang_kys/{id}', 'DuLieuDangKyController@getById');
