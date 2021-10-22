function submit_login() {
    if(document.getElementById("fname").value === "Lisa-Marlen" && document.getElementById("lname").value === "Wiegandt"
    && document.getElementById("password").value === "1234"){

        //window.location.replace("")
        alert("Welcome!");
        window.location.href = "../HTML/home.html";
    }else {
        alert("Wrong credentials - Try again!");
    }
}