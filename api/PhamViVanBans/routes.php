<?php
$router->post('/pham_vi_van_bans', 'PhamViVanBanController@create');
$router->put('/pham_vi_van_bans/{id}', 'PhamViVanBanController@update');
$router->delete('/pham_vi_van_bans/{id}', 'PhamViVanBanController@delete');
$router->get('/pham_vi_van_bans', 'PhamViVanBanController@getAll');
$router->get('/pham_vi_van_bans/{id}', 'PhamViVanBanController@getById');
