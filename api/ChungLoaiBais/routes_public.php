<?php

$router->get('/chung_loai_bais', 'ChungLoaiBaiController@getAll');
$router->get('/chung_loai_bais/{id}', 'ChungLoaiBaiController@getById');
