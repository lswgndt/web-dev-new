const admin = new User("Admin",  "Admin");

var current_tries_admin = 0;

function User(username, password){
    this.username = username;
    this.password = password;
}

function admin_login() {
    if(current_tries_admin < max_tries){
        if(admin.username === document.getElementById("admin_username").value
            && admin.password === document.getElementById("admin_password").value ) {
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

function hide_admin_lists(){
    document.getElementById("studentContainer").style.display ="none";
    document.getElementById("staffContainer").style.display ="none";
    document.getElementById("addStudent").style.display ="none";
    document.getElementById("addStaff").style.display ="none";
}

function show_students() {
    let x = document.getElementById("studentContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function add_student_form(){
    let x = document.getElementById("addStudent");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function add_student(){}

function update_student(){}

function delete_student(){}

function show_staff() {
    let x = document.getElementById("staffContainer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function add_staff_form(){
    let x = document.getElementById("addStaff");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function add_staff(){}

function update_staff(){}

function delete_staff(){}