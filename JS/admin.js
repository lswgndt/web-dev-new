const admin = new User("Admin",  "Admin");

const summer_sem_start = 4;
const summer_sem_end = 9;

const max_age = 60;
const min_age = 17;

var today = new Date();


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

function setup(){
    document.getElementById("studentContainer").style.display ="none";
    document.getElementById("staffContainer").style.display ="none";
    document.getElementById("addStudent").style.display ="none";
    document.getElementById("addStaff").style.display ="none";

    fill_students_list(students); //initially set up table

    let dd = today.getDate()-1;
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) { dd = '0' + dd; }
    if (mm < 10) { mm = '0' + mm; }

    let todayString = yyyy + '-' + mm + '-' + dd;
    document.getElementById("dobStudent").setAttribute("max", todayString);
    document.getElementById("dobStaff").setAttribute("max", todayString);
}

function show_students() {
    let studContainerRef = document.getElementById("studentContainer");
    if (studContainerRef.style.display === "none") {
        studContainerRef.style.display = "block";
    } else {
        studContainerRef.style.display = "none";
    }
}

function fill_students_list(source){
    let tbodyRef = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

    for(let i = 0; i < source.length; i++){
        let newRow = tbodyRef.insertRow(0);

        let newCell = newRow.insertCell();
        newCell.innerText = source[i]._id;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].firstName;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].lastName;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].dob;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].gender;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].department;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].email;

        newCell = newRow.insertCell();
        newCell.innerText = source[i].joiningDate;
    }
}

function filter_for_department(){
    document.getElementById("selectSemester").value = "none";
    let department = document.getElementById("selectDepartment").value;
    let result = 0;

    if(department === "appliedComputerScience"){
       result = students.filter(student => student.department === "Applied Computer Science");
    }
    else if(department === "mathematics"){
        result = students.filter(student => student.department === "Mathematics");
    }
    else if(department === "biology"){
        result = students.filter(student => student.department === "Biology");
    }
    else{
        result = students;
    }

    clear_table();
    fill_students_list(result);
}

function filter_for_semester(){
    document.getElementById("selectDepartment").value = "none";
    let semester = document.getElementById("selectSemester").value;
    let result = 0;
    if(semester === "winter"){
        result = students.filter(student => summer_sem_start > split_the_month(student.joiningDate) || summer_sem_end < split_the_month(student.joiningDate));
    }
    else if(semester === "summer"){
        result = students.filter(student => summer_sem_start <= split_the_month(student.joiningDate) && summer_sem_end >= split_the_month(student.joiningDate));
    }
    else{
        result = students;
    }

    clear_table()
    fill_students_list(result);
}

function split_the_month(date){
    let dateArray = date.split('-'); //splits YYYY-MM-DD into [(YYYY),(MM),(DD)]
    return dateArray[1];
}

function clear_table() {
    let tbodyRef = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    let new_tbody = document.createElement('tbody');
    tbodyRef.parentNode.replaceChild(new_tbody, tbodyRef)
}

function check_age(){
    let selectedDate = new Date(document.getElementById("dobStudent").value);
    let oldest = new Date(today);
    oldest.setFullYear(today.getFullYear() - max_age);
    let youngest = new Date(today);
    youngest.setFullYear(today.getFullYear() - min_age);

    if(selectedDate <= oldest || youngest <= selectedDate){
        alert("Invalid Date Of Birth!");
        document.getElementById("dobStudent").value = null;
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