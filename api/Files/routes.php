<?php
$router->post('/files', 'FileController@create');
$router->put('/files/{id}', 'FileController@update');
$router->delete('/files/{id}', 'FileController@delete');
$router->get('/files', 'FileController@getAll');
$router->get('/files/{id}', 'FileController@getById');
$router->post('/file_upload', 'FileController@storeFile');
