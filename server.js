//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/hp.html'));
});
app.get('/app1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app1.html'));
});
app.get('/app2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app2.html'));
});
app.get('/app3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app3.html'));
});
app.get('/app4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app4.html'));
});
app.get('/app5', function(req, res){
  res.sendFile(path.join(__dirname, 'views/app5.html'));
});
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname, 'views/404.html'));
});
//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});