<?php
$router->post('/bai_viets', 'BaiVietController@create');
$router->put('/bai_viets/{id}', 'BaiVietController@update');
$router->delete('/bai_viets/{id}', 'BaiVietController@delete');
$router->get('/bai_viets', 'BaiVietController@getAll');
$router->get('/bai_viets/{id}', 'BaiVietController@getById');
