<?php

$router->get('/bai_viets', 'BaiVietController@getAll');
$router->get('/bai_viets/{id}', 'BaiVietController@getById');
