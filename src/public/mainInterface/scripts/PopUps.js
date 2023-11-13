//Buttons
const RegBtn = document.getElementById('registrationBtn');
const LogBtn = document.getElementById('loginBtn');

//Switched divs
const registrationMenu = document.getElementById('home-content-reg');
const loginMenu = document.getElementById('home-content-log');

RegBtn.addEventListener("click", () => {
    registrationMenu.style.visibility = "visible";
    loginMenu.style.visibility = "hidden";
  });

LogBtn.addEventListener("click", () => {
    loginMenu.style.visibility = "visible";
    registrationMenu.style.visibility = "hidden";
});




