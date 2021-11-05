const admin = new User("Admin", true, "Admin");
const staff = new User("Staff" , false, "Staff");

const max_tries = 3;
var current_tries_admin = 0;
var current_tries_staff = 0;

function admin_login() {
    if(current_tries_admin <= max_tries){
        if(admin.username === document.getElementById("username").value
            && admin.password === document.getElementById("password").value ) {
            document.location.href = "../HTML/admin-home.html", true;
        }else {
            current_tries_admin += 1;
            alert("Login Credentials Incorrect");
        }
    }else {
        alert("Log In disabled now!");
    }
}

function staff_login() {
    if(current_tries_staff <= max_tries){
        if(staff.username === document.getElementById("username").value
            && staff.password === document.getElementById("password").value ) {
            document.location.href = "../HTML/staff-home.html", true;
        }else {
            current_tries_staff += 1;
            alert("Login Credentials Incorrect");
        }
    }else {
        alert("Log In disabled now!");
    }
}

function User(username, password){
    this.username = username;
    this.password = password;
}