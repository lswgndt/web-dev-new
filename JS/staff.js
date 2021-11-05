const staff = new User("Staff" ,  "Staff");

var current_tries_staff = 0;

function User(username, password){
    this.username = username;
    this.password = password;
}

function staff_login() {
    if(current_tries_staff < max_tries){
        if(staff.username === document.getElementById("staff_username").value
            && staff.password === document.getElementById("staff_password").value ) {
            document.location.href = "../HTML/staff-home.html", true;
        }else {
            current_tries_staff = current_tries_staff + 1;
            alert("Login Credentials Incorrect");
        }
    }else {
        alert("Log In disabled now!");
        disable_log_ins();
    }
}