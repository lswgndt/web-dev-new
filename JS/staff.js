const staff = new User("Staff" , false, "Staff");

const max_tries = 3;
var current_tries = 0;

function User(username, password){
    this.username = username;
    this.password = password;
}

function staff_login() {
    if(current_tries <= max_tries){
        if(staff.username === document.getElementById("username").value
            && staff.password === document.getElementById("password").value ) {
            document.location.href = "../HTML/staff-home.html", true;
        }else {
            current_tries += 1;
            alert("Login Credentials Incorrect");
        }
    }else {
        alert("Log In disabled now!");
    }
}