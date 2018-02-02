<?php
$router->post('/images', 'ImageController@create');
$router->put('/images/{id}', 'ImageController@update');
$router->delete('/images/{id}', 'ImageController@delete');
$router->get('/images', 'ImageController@getAll');
$router->get('/images/{id}', 'ImageController@getById');
$router->post('/image_upload', 'ImageController@storeImage');
