// Document is ready
$(document).ready(function () {
    // Validate Username
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        }
        else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usercheck").show();
            $("#usercheck").html("*Length of username must be between 3 and 10");
            usernameError = false;
            return false;
        }
        else {
            $("#usercheck").hide();
        }
    }

    // Validate Email
    const email = document.getElementById("email");
    email.addEventListener("blur", () => {
        let regex = /(\W|^)[\w.+\-]*@northeastern\.edu(\W|$)/;//a-z@north
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailError = true;
        }
        else {
            email.classList.add("is-invalid");
            emailError = false;
        }
    });

    // Validate Password
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length == "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html(
                "*Length of your password must be between 3 and 10"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        }
        else {
            $("#passcheck").hide();
        }
    }

    // Validate Confirm Password
    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#conpassword").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#conpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue != confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("*Password did not match");
            $("#conpasscheck").css("color", "red");
            confirmPasswordError = false;
            return false;
        }
        else {
            $("#conpasscheck").hide();
        }
    }

    // Submit button
    $("#submitbtn").click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        validateEmail();
        if (usernameError == true && passwordError == true && confirmPasswordError == true && emailError == true) 
        {
            return true;
        }
        else {
            return false;
        }
    });

    function login(loginform){
        var user2=document.getElementById('usernames').value;
        sessionStorage.setItem("user2", user2);
        console.log(user2);
      }		
      
      function myFunction() {
        location.href("\\index.html");
      }
});
