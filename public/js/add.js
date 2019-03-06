$("#agree").on("click", function(event) {
    event.preventDefault();

    var newUser = {
        username: $("#username").val().trim(),
        password: $("#password").val().trim()
    };

    $.post("/api/signup", newUser)
        .then(function(data) {
            console.log(data);
        });

    $("#username").val(" ");
    $("#password").val(" ");
});