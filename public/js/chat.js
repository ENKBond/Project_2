// Establish conncetion to server
// This socket variable is for the frontend (not the server)
const socket = io.connect('http://localhost:8000');

// Query DOM
const message = document.getElementById('message');
handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit events to server
// On send click, send chat message to server
btn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
});

// On key press, send handle to server
message.addEventListener('keypress', function () {
    socket.emit('typing', handle.value);
});


// Listen for events from server
// receive chat message from server and output to DOM
socket.on('chat', function (data) {
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>"
});

// receive typing message and output to DOM
socket.on('typing', function(data){
    feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});