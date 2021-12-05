const max_tries = 3;

function hide_log_ins(){
    document.getElementById("adminSecretLogIn").style.display ="none";
    document.getElementById("staffSecretLogIn").style.display ="none";
    document.getElementById("adminSecretLogIn").disable = false;
    document.getElementById("staffSecretLogIn").disable = false;
    document.getElementById("show_admin_login").disable = false;
    document.getElementById("show_staff_login").diable = false;
}

function show_admin_login() {
    var x = document.getElementById("adminSecretLogIn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function show_staff_login() {
    var x = document.getElementById("staffSecretLogIn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function disable_log_ins(){
    document.getElementById("adminSecretLogIn").style.display ="none";
    document.getElementById("staffSecretLogIn").style.display ="none";
    document.getElementById("adminSecretLogIn").disable = true;
    document.getElementById("staffSecretLogIn").disable = true;
    document.getElementById("show_admin_login").disable = true;
    document.getElementById("show_staff_login").diable = true;
}
