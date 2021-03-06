// Required files

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Routes and resources
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/style.css', function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

app.get('/css/bootstrap.css', function(req, res){
  res.sendFile(__dirname + '/css/bootstrap.css');
});

app.get('/js/bootstrap.min.js', function(req, res){
  res.sendFile(__dirname + '/js/bootstrap.min.js');
});

// Socket.io connection
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// Start server
http.listen(80, function(){
  console.log('BracketChat Server Running on Port 80');
});