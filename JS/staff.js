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

function hide_lists(){
    document.getElementById("webdevelopmentStudents").style.display ="none";
    document.getElementById("basisComputerScienceStudents").style.display ="none";
    document.getElementById("beginnerProgrammingStudents").style.display ="none";

}

function get_student_list(){
    let object = document.getElementById("selectCourse").value;
    if(object === "webdev"){
        hide_lists()
        show_students_webdevelopment();
    }
    if(object === "basic_of_computer_science"){
        hide_lists()
        show_students_basic_computer_science();
    }
    if(object === "beginner_programming"){
        hide_lists()
        show_students_beginner_programming();
    }
}

function show_students_webdevelopment(){
    let x = document.getElementById("webdevelopmentStudents");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function show_students_basic_computer_science(){
    let x = document.getElementById("basisComputerScienceStudents");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

}

function show_students_beginner_programming(){
    let x = document.getElementById("beginnerProgrammingStudents");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}