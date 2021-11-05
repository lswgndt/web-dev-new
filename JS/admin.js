const admin = new User("Admin", true, "Admin");

const max_tries = 3;
var current_tries = 0;

function User(username, password){
    this.username = username;
    this.password = password;
}

function admin_login() {
    if(current_tries <= max_tries){
        if(admin.username === document.getElementById("username").value
            && admin.password === document.getElementById("password").value ) {
            document.location.href = "../HTML/admin-home.html", true;
        }else {
            current_tries += 1;
            alert("Login Credentials Incorrect");
        }
    }else {
        alert("Log In disabled now!");
    }
}