const admin = new User("Admin",  "Admin");

var current_tries_admin = 0;

function User(username, password){
    this.username = username;
    this.password = password;
}

function admin_login() {
    if(current_tries_admin < max_tries){
        console.log("TEST")
        if(admin.username === document.getElementById("admin_username").value
            && admin.password === document.getElementById("admin_password").value ) {
            console.log("TEST2")
            document.location.href = "../HTML/admin-home.html", true;
        }else {
            current_tries_admin = current_tries_admin + 1;
            alert("Login Credentials Incorrect");
        }
    }else {
        alert("Log In disabled now!");
        disable_log_ins();
    }
}