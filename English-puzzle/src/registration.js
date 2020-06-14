var autorizationWrapper = document.getElementById("autorization-wrapper");
var startWrapper = document.getElementById("start-wrapper");

function registration() {
  autorizationWrapper.innerHTML = "";
  body.removeChild(autorizationWrapper);
  startWrapper.style.display = "flex";
}

export default registration;
