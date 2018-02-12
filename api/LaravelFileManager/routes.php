<?php
// Show LFM
$router->get('/file_manager/', [
    'uses' => 'LfmController@show',
    'as' => 'show',
]);

// Show integration error messages
$router->get('/file_manager/errors', [
    'uses' => 'LfmController@getErrors',
    'as' => 'getErrors',
]);

// upload
$router->any('/file_manager/upload', [
    'uses' => 'UploadController@upload',
    'as' => 'upload',
]);

// list images & files
$router->get('/file_manager/jsonitems', [
    'uses' => 'ItemsController@getItems',
    'as' => 'getItems',
]);

// folders
$router->get('/file_manager/newfolder', [
    'uses' => 'FolderController@getAddfolder',
    'as' => 'getAddfolder',
]);
$router->get('/file_manager/deletefolder', [
    'uses' => 'FolderController@getDeletefolder',
    'as' => 'getDeletefolder',
]);
$router->get('/file_manager/folders', [
    'uses' => 'FolderController@getFolders',
    'as' => 'getFolders',
]);

// crop
$router->get('/file_manager/crop', [
    'uses' => 'CropController@getCrop',
    'as' => 'getCrop',
]);
$router->get('/file_manager/cropimage', [
    'uses' => 'CropController@getCropimage',
    'as' => 'getCropimage',
]);
$router->get('/file_manager/cropnewimage', [
    'uses' => 'CropController@getNewCropimage',
    'as' => 'getCropimage',
]);

// rename
$router->get('/file_manager/rename', [
    'uses' => 'RenameController@getRename',
    'as' => 'getRename',
]);

// scale/resize
$router->get('/file_manager/resize', [
    'uses' => 'ResizeController@getResize',
    'as' => 'getResize',
]);
$router->get('/file_manager/doresize', [
    'uses' => 'ResizeController@performResize',
    'as' => 'performResize',
]);

// download
$router->get('/file_manager/download', [
    'uses' => 'DownloadController@getDownload',
    'as' => 'getDownload',
]);

// delete
$router->get('/file_manager/delete', [
    'uses' => 'DeleteController@getDelete',
    'as' => 'getDelete',
]);
