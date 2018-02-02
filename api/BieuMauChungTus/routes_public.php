<?php

$router->get('/bieu_mau_chung_tus', 'BieuMauChungTuController@getAll');
$router->get('/bieu_mau_chung_tus/{id}', 'BieuMauChungTuController@getById');
