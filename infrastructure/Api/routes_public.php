<?php
$router->get('/admin', function() {
  return View::make("backend");
});
$router->get('/', function() {
  return View::make("admin");
});
