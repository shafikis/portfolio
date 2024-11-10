$(document).ready(function () {

    // Validate Username
    $("#usercheck").hide();
    $("#emailcheck").hide();
    $("#successcheck").hide();

    let userDone = true;
    $("#name").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#name").val();
        if (usernameValue.length === "") {
            $("#usercheck").show();
            userDone = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 3 and 10");
            userDone = false;
            return false;
        } else {
            $("#usercheck").hide();
            userDone = true;
        }
    }

    // Validate Email
    const email = document.getElementById("email");
    let emailDone = true;
    email.addEventListener("blur", () => {
        let regex = 
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailDone = true;
            $("#emailcheck").show();
        } else {
            email.classList.add("is-invalid");
            emailDone = false;
            $("#emailcheck").hide();
        }
    });

    // Submit button
    $("#submitbtn").click(function () {
        validateUsername();
        email.dispatchEvent(new Event('blur')); 
        if (
            userDone &&
            emailDone
        ) {
            $("#successcheck").show();
        }
        return false;

    });
});

