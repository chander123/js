

// Object that contains the username and password
var userData = {
  username : "Poornima",
  password : "123"
};

function userInfo(name, password){
  this.name = name;
  this.password = password;
}

userInfo.prototype.getUserInfo = function(){
  name = document.getElementById('uname').value;
  password = document.getElementById('psd').value;
 
  if(name == userData.username && password == userData.password){
    localStorage.setItem("userName", name);
    location.href = 'http://localhost/projects/registration/form/registered.html';
  } else {
    alert("Not a Registered User");
  }
}

userInfo.prototype.regUser = function(){
  if(localStorage.getItem('userName')){
    document.getElementById("regUser").innerHTML = localStorage.getItem('userName');
  }
}

var user = new userInfo();

window.addEventListener('load', function(){
  user.regUser();
});
