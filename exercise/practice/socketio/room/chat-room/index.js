var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
});
 
io.emit('msgevent', { for: 'everyone' });

var clients = 0;
io.on('connection', function(socket) {
   clients++;
   socket.emit('login',{ description: 'Welcome user join into chatting room!'});
   socket.broadcast.emit('login',{ description: clients + ' clients connected!'})
   console.log('clients:' + clients);
   console.log('console:a user connected');
   socket.on('disconnect', function () {
      clients--;
      socket.broadcast.emit('login',{ description: clients + ' clients connected!'})
      console.log('clients:' + clients);
      console.log('console:user disconnected');
   });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
