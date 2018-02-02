<?php

$router->get('/pham_vi_van_bans', 'PhamViVanBanController@getAll');
$router->get('/pham_vi_van_bans/{id}', 'PhamViVanBanController@getById');
