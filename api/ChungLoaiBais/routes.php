<?php
$router->post('/chung_loai_bais', 'ChungLoaiBaiController@create');
$router->put('/chung_loai_bais/{id}', 'ChungLoaiBaiController@update');
$router->delete('/chung_loai_bais/{id}', 'ChungLoaiBaiController@delete');
$router->get('/chung_loai_bais', 'ChungLoaiBaiController@getAll');
$router->get('/chung_loai_bais/{id}', 'ChungLoaiBaiController@getById');
