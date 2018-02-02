<?php
$router->post('/truong_du_lieus', 'TruongDuLieuController@create');
$router->put('/truong_du_lieus/{id}', 'TruongDuLieuController@update');
$router->delete('/truong_du_lieus/{id}', 'TruongDuLieuController@delete');
$router->get('/truong_du_lieus', 'TruongDuLieuController@getAll');
$router->get('/truong_du_lieus/{id}', 'TruongDuLieuController@getById');
