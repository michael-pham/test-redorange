<?php
$router->post('/loai_bai_viets', 'LoaiBaiVietController@create');
$router->put('/loai_bai_viets/{id}', 'LoaiBaiVietController@update');
$router->delete('/loai_bai_viets/{id}', 'LoaiBaiVietController@delete');
$router->get('/loai_bai_viets', 'LoaiBaiVietController@getAll');
$router->get('/loai_bai_viets/{id}', 'LoaiBaiVietController@getById');
