<?php

$router->get('/binh_luans', 'BinhLuanController@getAll');
$router->get('/binh_luans/{id}', 'BinhLuanController@getById');
