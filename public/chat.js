//make connection

// from index.js we are taking
let socket=io.connect('http://localhost:4001')

var message=document.getElementById('message');

var handle=document.getElementById('handle');

var btn=document.getElementById('send');

var output=document.getElementById('output');

// take value from msg box and send it to server

btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value //tells the name of person who sends it
        
    }); 
    //get the message here
    message.value=""; 
    //used to send data from and to the socket
     //name and data are 2 parameters
})

socket.on('chat',function(data){
    console.log(data)
    output.innerHTML+=`<p>${data.handle}:${data.message}</p>`
})