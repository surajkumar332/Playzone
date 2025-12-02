// register user
function registerUser(event) {
    event.preventDefault();

    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value;
    let confirm = document.getElementById("regConfirm").value;

    if (password !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    let user = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(user));
    localStorage.setItem("isRegistered", "true");

    // alert("Registration Successful!");
    window.location.href = "login.html";
}

// login user
function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let user = JSON.parse(localStorage.getItem("userData"));

    if (!user) {
        alert("No user found. Please Register.");
        return;
    }

    if (email === user.email && password === user.password) {
        // alert("Login Successful!");
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Invalid Email or Password!");
    }
}

// password visibility toggle
function togglePassword() {
    let pass = document.getElementById("loginPassword");
    pass.type = pass.type === "password" ? "text" : "password";
}


// register password show/hide
function toggleRegPassword() {
    let pass = document.getElementById("regPassword");
    pass.type = pass.type === "password" ? "text" : "password";
}

// register confirm password show/hide
function toggleRegConfirm() {
    let pass = document.getElementById("regConfirm");
    pass.type = pass.type === "password" ? "text" : "password";
}
