var maxTry = 3;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var err = document.getElementById("error").innerHTML;

  if (username == "") {
    alert("User Name Should not be empty");
  }
  if (password == "") {
    alert("Password should not be empty");
  }

  if (username == "vishnu" && password == "project") {
    document.getElementById("error").innerHTML = "Log in sucessfull";
    window.location = "index.html";
    return false;
  } else {
    maxTry--;
    document.getElementById("error").innerHTML =
      "<br>Incrorrect username and password" +
      "<br>You have left" +
      maxTry +
      " attempt.";
    if (maxTry == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
