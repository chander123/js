
// var imported = document.createElement("script");
// imported.src = "login.js";
// document.getElementsByTagName("head")[0].appendChild(imported);

// function to destoy session and redirect to login page
function logout(){
 localStorage.removeItem("userName");
 location.href = 'http://localhost/projects/registration/form/login.html';
}
