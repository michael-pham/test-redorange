<?php

$router->get('/co_quan_ban_hanhs', 'CoQuanBanHanhController@getAll');
$router->get('/co_quan_ban_hanhs/{id}', 'CoQuanBanHanhController@getById');
