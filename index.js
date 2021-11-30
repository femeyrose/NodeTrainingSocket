const express =require('express');
var socket =require('socket.io')

const app=express();

const server=app.listen(4001,()=>{
    console.log('server listening on port 4001')
})
app.use(express.static('public'))

var io =socket(server)

io.on('connection',(socket)=>{
    console.log('new connection made', socket.id)
 socket.on('chat',(data)=>{
     console.log(data)
     io.sockets.emit('chat',data);
     //for multiple client chat
 });

}) 
//event, socket id is given to client

//there will be multiple clients and one server


