var express = require('express');
var app=express();
var http=require('http').createServer(app);
var io=require('socket.io').listen(http);

app.use(express.static(__dirname + ''));


io.on('connection',function (socket) {
    socket.on('chatMessage', function(from, msg){
        io.emit('chatMessage', from, msg);
    });
    socket.on('notifyUser', function(user){
        io.emit('notifyUser', user);
    });
});


app.listen(8088);
