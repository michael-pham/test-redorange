<?php

$router->get('/loai_bai_viets', 'LoaiBaiVietController@getAll');
$router->get('/loai_bai_viets/{id}', 'LoaiBaiVietController@getById');
