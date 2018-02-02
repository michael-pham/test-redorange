<?php

$router->get('/truong_du_lieus', 'TruongDuLieuController@getAll');
$router->get('/truong_du_lieus/{id}', 'TruongDuLieuController@getById');
