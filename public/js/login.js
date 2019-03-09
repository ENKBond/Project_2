$(document).ready(function() {
    $("#goChat").on("submit", function(event) {
        event.preventDefault();

        var userData = {
            username: $("#username").val().trim(),
            password: $("#password").val().trim()
        };

        if(!userData.username || !userData.password) {
            $("#alert").html("Please fill out all fields");
            return;
            } else {
                $("#alert").html("");
                $(".modal").modal("close");
            }

        loginUser(userData.username, userData.password);
        $("#username").val("");
        $("#password").val("");

        function loginUser(username, password) {
            $.post("/api/login", {
                username: username,
                password: password
            }).then(function(data) {
                window.location="../chat.html"
            }).catch(function(err) {
                console.log(err);
            });
        }
    });




















});