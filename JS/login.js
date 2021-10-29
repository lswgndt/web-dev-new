const admin = new User("Lisa-Marlen", "Wiegandt", true, "1234");
const staff = new User("Kevin", "Cerimi", false, "5678");

const users = [admin, staff];


function check_credentials(){
    let found_user = false;
    let user_logged = null;
    for(let i=0; i<users.length; i++) {
        if(users[i].firstname === document.getElementById("fname").value
        && users[i].lastname === document.getElementById("lname").value ) {
            if(users[i].password === document.getElementById("password").value){
                found_user = true;
                user_logged = users[i];
            }
        }
    }
    return [found_user, user_logged];
}


function login() {
    let logged_in = check_credentials();
    if(logged_in[0]){
        alert("Welcome!");
        if(logged_in[1].superuser){
            document.location.href = "../HTML/admin-home.html", true;
        }else {
            document.location.href = "../HTML/staff-home.html", true;
        }

    }else {
        alert("Wrong credentials - Try again!");
    }
}

function User(firstname, lastname, superuser, password){
    this.firstname = firstname;
    this.lastname = lastname;
    this.superuser = superuser;
    this.password = password;
}