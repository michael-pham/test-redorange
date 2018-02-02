<?php
$router->post('/bieu_mau_chung_tus', 'BieuMauChungTuController@create');
$router->put('/bieu_mau_chung_tus/{id}', 'BieuMauChungTuController@update');
$router->delete('/bieu_mau_chung_tus/{id}', 'BieuMauChungTuController@delete');
$router->get('/bieu_mau_chung_tus', 'BieuMauChungTuController@getAll');
$router->get('/bieu_mau_chung_tus/{id}', 'BieuMauChungTuController@getById');
