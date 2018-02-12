<?php
// Show LFM
$router->get('/file-mananger/', [
    'uses' => 'LfmController@show',
    'as' => 'show',
]);

// Show integration error messages
$router->get('/file-mananger/errors', [
    'uses' => 'LfmController@getErrors',
    'as' => 'getErrors',
]);

// upload
$router->any('/upload', [
    'uses' => 'UploadController@upload',
    'as' => 'upload',
]);

// list images & files
$router->get('/file-mananger/jsonitems', [
    'uses' => 'ItemsController@getItems',
    'as' => 'getItems',
]);

// folders
$router->get('/file-mananger/newfolder', [
    'uses' => 'FolderController@getAddfolder',
    'as' => 'getAddfolder',
]);
$router->get('/file-mananger/deletefolder', [
    'uses' => 'FolderController@getDeletefolder',
    'as' => 'getDeletefolder',
]);
$router->get('/file-mananger/folders', [
    'uses' => 'FolderController@getFolders',
    'as' => 'getFolders',
]);

// crop
$router->get('/file-mananger/crop', [
    'uses' => 'CropController@getCrop',
    'as' => 'getCrop',
]);
$router->get('/file-mananger/cropimage', [
    'uses' => 'CropController@getCropimage',
    'as' => 'getCropimage',
]);
$router->get('/file-mananger/cropnewimage', [
    'uses' => 'CropController@getNewCropimage',
    'as' => 'getCropimage',
]);

// rename
$router->get('/file-mananger/rename', [
    'uses' => 'RenameController@getRename',
    'as' => 'getRename',
]);

// scale/resize
$router->get('/file-mananger/resize', [
    'uses' => 'ResizeController@getResize',
    'as' => 'getResize',
]);
$router->get('/file-mananger/doresize', [
    'uses' => 'ResizeController@performResize',
    'as' => 'performResize',
]);

// download
$router->get('/file-mananger/download', [
    'uses' => 'DownloadController@getDownload',
    'as' => 'getDownload',
]);

// delete
$router->get('/file-mananger/delete', [
    'uses' => 'DeleteController@getDelete',
    'as' => 'getDelete',
]);
