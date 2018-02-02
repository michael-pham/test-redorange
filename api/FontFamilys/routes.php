<?php
$router->post('/font_familys', 'FontFamilyController@create');
$router->put('/font_familys/{id}', 'FontFamilyController@update');
$router->delete('/font_familys/{id}', 'FontFamilyController@delete');
$router->get('/font_familys', 'FontFamilyController@getAll');
$router->get('/font_familys/{id}', 'FontFamilyController@getById');
