<?php

$router->get('/loai_van_bans', 'LoaiVanBanController@getAll');
$router->get('/loai_van_bans/{id}', 'LoaiVanBanController@getById');
