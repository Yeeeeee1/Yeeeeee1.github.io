import registration from "./registration.js";
import zapros from "./request.js";
import start from "./start.js";

var buttonRegistration = document.getElementById("registration");
var buttonStart = document.getElementById("button-start");

buttonRegistration.addEventListener("click", registration);

buttonStart.addEventListener("click", start);

zapros();
