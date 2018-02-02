<?php
$router->post('/du_lieu_dang_kys', 'DuLieuDangKyController@create');
$router->put('/du_lieu_dang_kys/{id}', 'DuLieuDangKyController@update');
$router->delete('/du_lieu_dang_kys/{id}', 'DuLieuDangKyController@delete');
$router->get('/du_lieu_dang_kys', 'DuLieuDangKyController@getAll');
$router->get('/du_lieu_dang_kys/{id}', 'DuLieuDangKyController@getById');
