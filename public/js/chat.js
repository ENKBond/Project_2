// Establish conncetion to server
// This socket variable is for the frontend (not the server)
// const socket = io();
const socket = io('http://localhost:8000');

// Query DOM
const message = document.getElementById('message');
formArea = document.getElementById('form-area'),
    chatRoom = document.getElementById('chat-room'),
    nameSelect = document.getElementById('name-select'),
    username = document.getElementById('username'),
    confirmBtn = document.getElementById('confirm'),
    sendBtn = document.getElementById('send'),
    users = document.getElementById('users'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// -- Emit events to server -- 
// display chat room when user selects a name
confirmBtn.addEventListener('click', function (e) {
    console.log(nameSelect.value);
    e.preventDefault();
    username.value = nameSelect.value;
    socket.emit('new user', nameSelect.value)
    formArea.style.display = 'none';
    chatRoom.style.display = 'block';
    nameSelect.value = "";
});

// On send click, send chat message to server
sendBtn.addEventListener('click', function () {
    socket.emit('chat', {
        message: message.value,
        username: username.value
    });
});

// On key press, send username to server
message.addEventListener('keypress', function () {
    socket.emit('typing', username.value);
});


// Listen for events from server
// receive chat message from server and output to DOM
socket.on('chat', function (data) {
    feedback.innerHTML = "";
    output.innerHTML += "<p><strong>" + data.username + ":</strong>" + data.message + "</p>"
});

// receive typing message and output to DOM
socket.on('typing', function (data) {
    feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});

// print users array
socket.on('get users', function (data) {
    let html = '';
    for (i = 0; i < data.length; i++) {
        html += '<li class="list-group-item">' + data[i] + '</li>'
    };
    users.innerHTML = html;
});