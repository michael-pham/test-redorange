<?php
$router->post('/co_quan_ban_hanhs', 'CoQuanBanHanhController@create');
$router->put('/co_quan_ban_hanhs/{id}', 'CoQuanBanHanhController@update');
$router->delete('/co_quan_ban_hanhs/{id}', 'CoQuanBanHanhController@delete');
$router->get('/co_quan_ban_hanhs', 'CoQuanBanHanhController@getAll');
$router->get('/co_quan_ban_hanhs/{id}', 'CoQuanBanHanhController@getById');
