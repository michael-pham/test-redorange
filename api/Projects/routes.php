<?php
$router->post('/projects', 'ProjectController@create');
$router->post('/build_project/{id}', 'ProjectController@buildProject');
$router->post('/show_create_form_code', 'ProjectController@showCreateFormCode');
$router->post('/show_update_form_code', 'ProjectController@showUpdateFormCode');
$router->post('/show_listing_table_code', 'ProjectController@showListingTableCode');
$router->put('/projects/{id}', 'ProjectController@update');
$router->delete('/projects/{id}', 'ProjectController@delete');
$router->get('/projects', 'ProjectController@getAll');
$router->get('/projects/{id}', 'ProjectController@getById');
