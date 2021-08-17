// const socket = io( 'http://midominio.com' );
const socket = io(); // si no le indicamos dominio se conecta al dominio propio

let message = document.getElementById('message');
let username = document.getElementById('username');
let sendButton = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

sendButton.addEventListener( 'click', function(){
    
    socket.emit( 'client:message', {
        message: message.value,
        username: username.value
    })

});

socket.on( 'chat:message', function (data){
    output.innerHTML += `<p>
        <strong>${data.username}</strong>: ${data.message}
    </p>`;
});