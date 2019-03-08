$("#agree").on("click", function(event) {
    event.preventDefault();

    var newUser = {
        username: $("#username").val().trim(),
        password: $("#password").val().trim()
    };

    if (!newUser.username || !newUser.password) {
        $("#alert").html("Please fill out all fields");
        return;
    } else {
        $(".modal").modal("close");
    }

    $.post("/api/signup", newUser)
        .then(function(data) {
            console.log(data);
            window.location= "../survey.html"
        }).catch(handleLoginErr);

    function handleLoginErr(err) {
        $("#alert").text(err.responseJSON);
    }

    $("#username").val(" ");
    $("#password").val(" ");
});