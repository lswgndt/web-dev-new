const admin = new User("Admin",  "Admin");

const summer_sem_start = 4;
const summer_sem_end = 9;


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

    fill_students_list(); //initially set up table
}

function show_students() {
    let studContainerRef = document.getElementById("studentContainer");
    if (studContainerRef.style.display === "none") {
        studContainerRef.style.display = "block";
    } else {
        studContainerRef.style.display = "none";
    }
}

function fill_students_list(){
    let tbodyRef = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

    for(let i = 0; i < students.length; i++){
        let newRow = tbodyRef.insertRow(0);

        let newCell = newRow.insertCell();
        newCell.innerText = students[i]._id;

        newCell = newRow.insertCell();
        newCell.innerText = students[i].firstName;

        newCell = newRow.insertCell();
        newCell.innerText = students[i].lastName;

        newCell = newRow.insertCell();
        newCell.innerText = students[i].dob;

        newCell = newRow.insertCell();
        newCell.innerText = students[i].gender;

        newCell = newRow.insertCell();
        newCell.innerText = students[i].department;

        newCell = newRow.insertCell();
        newCell.innerText = students[i].email;

        newCell = newRow.insertCell();
        newCell.innerText = students[i].joiningDate;
    }
}

function filter_for_department(){
    let department = document.getElementById("selectDepartment").value;
    if(department === "appliedComputerScience"){
        students.filter(student => summer_sem_start >= split_the_month(student.joiningDate) && summer_sem_end <= split_the_month(student.joiningDate));
    }
    if(department === "winter"){
        students.filter(student => summer_sem_start < split_the_month(student.joiningDate) && summer_sem_end > split_the_month(student.joiningDate));
    }
}

function filter_for_semester(){
    let semester = document.getElementById("selectSemester").value;
    if(semester === "Summer"){
        students.filter(student => summer_sem_start >= split_the_month(student.joiningDate) && summer_sem_end <= split_the_month(student.joiningDate));
    }
    if(semester === "winter"){
        students.filter(student => summer_sem_start < split_the_month(student.joiningDate) && summer_sem_end > split_the_month(student.joiningDate));
    }
}

function split_the_month(date){
    var dateArray = date.split('-'); //splits YYYY-MM-DD into [(YYYY),(MM),(DD)]
    return dateArray[1];
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