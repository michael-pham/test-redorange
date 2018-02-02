<?php

$router->get('/font_familys', 'FontFamilyController@getAll');
$router->get('/font_familys/{id}', 'FontFamilyController@getById');
