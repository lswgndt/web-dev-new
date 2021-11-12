const admin = new User("Admin",  "Admin");
const students = [{
    "studentID" : "572770",
    "lastName" : "Wiegandt",
    "firstName" : "Lisa-Marlen",
    "dob" : "1999-07-10",
    "gender" : "female",
    "departmentID" : "01",
    "email" : "wiegandtlisa@gmail.com",
    "joiningDate" : "2019-10-01"
}, {
    "studentID" : "123456",
    "lastName" : "Kurosaki",
    "firstName" : "Itchigo",
    "dob" : "2001-07-15",
    "gender" : "male",
    "departmentID" : "02",
    "email" : "kurosakiitchogo@example.com",
    "joiningDate" : "2020-09-01"
}, {
    "studentID" : "123457",
    "lastName" : "Inoue",
    "firstName" : "Orihime",
    "dob" : "2003-09-03",
    "gender" : "female",
    "departmentID" : "03",
    "email" : "inoueorihime@example.com",
    "joiningDate" : "2020-04-01"
}]

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

    let table = document.getElementById("studentTable");

    table.insertRow(0);

    let y = document.getElementById("insertStudentsHere");

    let studentIDs = students.map( student => student.studentID);
    let lastNames = students.map( student => student.lastName);
    let firstNames = students.map( student => student.firstName);
    let departmentIDs = students.map( student => student.departmentID);
    let joiningDates = students.map( student => student.joiningDate);

    for(let i = 0; i < students.length; i++){
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);


        y.innerHTML =  y.innerHTML +
        "<tr>\n" +
            "                    <td>"+studentIDs[i]+"</td>\n" +
            "                    <td>"+firstNames[i]+"</td>\n" +
            "                    <td>"+lastNames[i]+"</td>\n" +
            "                    <td>"+departmentIDs[i]+"</td>\n" +
            "                    <td>"+joiningDates[i]+"</td>\n" +
            "                </tr>"
        ;
    }
}

function sort_student_list(param){
    /*
    0 = Student ID
    1 = Last Name
    2 = First Name
    3 = Department ID
    4 = Joining Date
     */
    if(param === 0 ){

    }
    if(param === 1){

    }
    if(param === 2){

    }
    if(param === 3){

    }
    if(param === 4){

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