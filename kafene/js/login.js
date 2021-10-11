const form = document.forms.signIn;
const ERROR_LOGIN = "Invalid Username or Password!";

if (localStorage.getItem("loginStatus") === "true") {
  window.location = "./orders.html";
}

let userField = document.getElementById("username");
let passField = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateLogin(userField.value, passField.value);
});

const validateLogin = (user, pass) => {
  console.log(user, pass);

  if (user === pass) {
    localStorage.setItem("loginStatus", true);
    window.location = "./orders.html";
  } else {
    alert(ERROR_LOGIN);
  }
};
