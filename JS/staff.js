const staffLogIn = new User("Staff" ,  "Staff");

var current_tries_staff = 0;

function User(username, password){
    this.username = username;
    this.password = password;
}

function staff_login() {
    if(current_tries_staff < max_tries){
        if(staffLogIn.username === document.getElementById("staff_username").value
            && staffLogIn.password === document.getElementById("staff_password").value ) {
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

function setup_staff(){
    document.getElementById("studentTableStaff").style.display ="none";
}

function filter_for_course(){
    let course = document.getElementById("selectCourse").value;
    let result = 0;

    if(course === "webdev"){
        result = students.filter(student => student.course === "Webdevelopment");
        document.getElementById("studentTableStaff").style.display ="block";
    }
    else if(course === "basic_of_computer_science"){
        result = students.filter(student => student.course === "Basics Of Computer Science");
        document.getElementById("studentTableStaff").style.display ="block";
    }
    else if(course === "beginner_programming"){
        result = students.filter(student => student.course === "Programming For Beginners");
        document.getElementById("studentTableStaff").style.display ="block";
    }
    else{
        document.getElementById("studentTableStaff").style.display ="none";
    }

    clear_table();
    fill_students_list(result);
}

function fill_students_list(source){
    let tbodyRef = document.getElementById("studentTableStaff").getElementsByTagName("tbody")[0];

    for(let i = 0; i < source.length; i++){
        let newRow = tbodyRef.insertRow(0);

        let newCell = newRow.insertCell();
        newCell.innerText = source[i]._id;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].firstName;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].lastName;
    }
}

function clear_table() {
    let tbodyRef = document.getElementById("studentTableStaff").getElementsByTagName("tbody")[0];
    let new_tbody = document.createElement('tbody');
    tbodyRef.parentNode.replaceChild(new_tbody, tbodyRef)
}