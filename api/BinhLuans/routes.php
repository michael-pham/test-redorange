<?php
$router->post('/binh_luans', 'BinhLuanController@create');
$router->put('/binh_luans/{id}', 'BinhLuanController@update');
$router->delete('/binh_luans/{id}', 'BinhLuanController@delete');
$router->get('/binh_luans', 'BinhLuanController@getAll');
$router->get('/binh_luans/{id}', 'BinhLuanController@getById');
