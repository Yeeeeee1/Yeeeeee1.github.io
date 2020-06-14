var body = document.getElementById("body");
var startWrapper = document.getElementById("start-wrapper");
var dragAndDropBlock = document.getElementById("drag-and-drop-block");

function start() {
  startWrapper.innerHTML = "";
  body.removeChild(startWrapper);
  body.style.background = "white";
  dragAndDropBlock.style.display = "flex";
}

export default start;
