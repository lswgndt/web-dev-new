function login() {
    if(document.getElementById("fname").value === "Lisa-Marlen" && document.getElementById("lname").value === "Wiegandt"
    && document.getElementById("password").value === "1234"){
        alert("Welcome!");
        document.location.href = "../HTML/admin-home.html", true;
    }else {
        alert("Wrong credentials - Try again!");
    }
}