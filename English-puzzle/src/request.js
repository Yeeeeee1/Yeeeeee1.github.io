var buttonRegistration = document.getElementById("registration");
var autorizationWrapper = document.getElementById("autorization-wrapper");
var startWrapper = document.getElementById("start-wrapper");
var buttonStart = document.getElementById("button-start");
var body = document.getElementById("body");
var dragAndDropBlock = document.getElementById("drag-and-drop-block");
var buttonsDragWrapper = document.getElementById("buttons-drag-wrapper");
var mousesover = document.getElementById("mousesover");
var mousesover2 = document.getElementById("mousesover2");
var buttonCheck = document.getElementById("button-check");
var buttonKnow = document.getElementById("button-know");
var level = document.getElementById("level");
var round = document.getElementById("round");
var string = document.getElementById("string");
var translate = document.getElementById("translate");
var volume = document.getElementById("volume");
var buttonsChecksWrapper = document.getElementById("buttons-checks-wrapper");
var buttonContinue = document.getElementById("button-continue");
buttonCheck.disabled = true;
buttonKnow.disabled = true;
buttonContinue.disabled = true;
buttonCheck.classList.add("disabled-button");
buttonKnow.classList.add("disabled-button");
buttonContinue.classList.add("disabled-button");

var n = -1;
var v = 0;
function zapros() {
  const url = `https://afternoon-falls-25894.herokuapp.com/words?group=${v}&page=${v}&wordsPerExampleSentenceLTE=10&wordsPerPage=20`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      n++;
      mousesover2.innerHTML = "";
      mousesover.innerHTML = "";
      if (n == 19) {
        v++;
        n = 0;
      }
      string.innerHTML++;
      if (string.innerHTML == "11") {
        string.innerHTML = "1";
        round.innerHTML++;
      }
      if (round.innerHTML == "61") {
        round.innerHTML = "1";
        level.innerHTML++;
      }
      volume.addEventListener("click", function () {
        var audio = new Audio();
        audio.preload = "auto";
        audio.src =
          "https://afternoon-falls-25894.herokuapp.com/" + data[n].audioExample;
        audio.play();
      });
      translate.innerHTML = data[n].textExampleTranslate;
      var str = data[n].textExample;
      var arr = str.split(" ");
      arr.sort();

      for (var i = 0; i < arr.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = arr[i];
        button.id = "drag-button";
        button.classList.add("drag-button");
        mousesover.appendChild(button);
      }
      let buttons = document.querySelectorAll(".drag-button");

      buttons.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          var button = document.createElement("button");
          for (var i = 0; i < arr.length; i++) {
            if (elem.innerHTML == arr[i]) {
              button.innerHTML = arr[i];
            }
          }
          button.id = "drag-button";
          button.classList.add("drag-button");
          mousesover2.appendChild(button);
          elem.remove();
          if (mousesover.getElementsByClassName("drag-button").length == 0) {
            buttonCheck.disabled = false;
            buttonCheck.classList.remove("disabled-button");
            buttonCheck.addEventListener("click", function check() {
              buttonCheck.disabled = true;
              buttonCheck.classList.add("disabled-button");
              for (
                var i = 0;
                i < mousesover2.getElementsByClassName("drag-button").length;
                i++
              ) {
                var strCheck = (mousesover2.getElementsByClassName(
                  "drag-button"
                )[0].innerHTML +=
                  " " +
                  mousesover2.getElementsByClassName("drag-button")[i]
                    .innerHTML);
              }
              strCheck = strCheck.split(" ");
              strCheck.shift();
              strCheck.join();
              var re = /,/gi;
              strCheck = strCheck.toString().replace(re, " ");
              function doSetTimeout(i) {
                setTimeout(function () {
                  mousesover2.getElementsByClassName("drag-button")[
                    i
                  ].style.border = "0.5px solid #d1cfcd";
                }, 1000);
              }

              if (strCheck == data[n].textExample) {
                mousesover.innerHTML = "";
                mousesover2.innerHTML = "";

                str = data[n].textExample;
                arr = str.split(" ");
                for (var i = 0; i < arr.length; i++) {
                  var button = document.createElement("button");
                  button.innerHTML = arr[i];
                  button.id = "drag-button";
                  button.classList.add("drag-button");
                  mousesover2.appendChild(button);
                }

                for (
                  var i = 0;
                  i < mousesover2.getElementsByClassName("drag-button").length;
                  i++
                ) {
                  mousesover2.getElementsByClassName("drag-button")[
                    i
                  ].style.border = "0.5px solid green";
                  doSetTimeout(i);
                }

                buttonContinue.disabled = false;
                buttonContinue.classList.remove("disabled-button");
                buttonContinue.addEventListener("click", function () {
                  buttonContinue.disabled = true;
                  buttonContinue.classList.add("disabled-button");
                  mousesover.innerHTML = "";
                  zapros();
                });
              } else {
                buttonKnow.disabled = false;
                buttonKnow.classList.remove("disabled-button");
                for (
                  var i = 0;
                  i < mousesover2.getElementsByClassName("drag-button").length;
                  i++
                ) {
                  mousesover2.getElementsByClassName("drag-button")[
                    i
                  ].style.border = "0.5px solid red";
                  doSetTimeout(i);
                }
                let buttons = document.querySelectorAll(".drag-button");
                buttons.forEach((elem) => {
                  elem.addEventListener("click", (e) => {
                    var button = document.createElement("button");
                    for (var i = 0; i < arr.length; i++) {
                      if (elem.innerHTML == arr[i]) {
                        button.innerHTML = arr[i];
                      }
                    }
                    button.id = "drag-button";
                    button.classList.add("drag-button");
                    mousesover.appendChild(button);
                    elem.remove();
                  });
                });
                if (
                  mousesover.getElementsByClassName("drag-button").length == 1
                ) {
                  var button = document.createElement("button");
                  button.classList.add("button-check");
                  button.id = "button-check";
                  button.innerHTML = "Check";
                  buttonsChecksWrapper.appendChild(button);
                  button.addEventListener("click", alert());
                }

                buttonKnow.addEventListener("click", function () {
                  buttonKnow.disabled = true;
                  buttonKnow.classList.add("disabled-button");

                  buttonContinue.disabled = false;
                  buttonContinue.classList.remove("disabled-button");

                  mousesover.innerHTML = "";
                  mousesover2.innerHTML = "";
                  var str = data[n].textExample;
                  var arr = str.split(" ");
                  for (var i = 0; i < arr.length; i++) {
                    var button = document.createElement("button");
                    button.innerHTML = arr[i];
                    button.id = "drag-button";
                    button.classList.add("drag-button");
                    mousesover2.appendChild(button);
                  }

                  buttonContinue.addEventListener("click", function () {
                    buttonContinue.disabled = true;
                    buttonContinue.classList.add("disabled-button");
                    mousesover.innerHTML = "";
                    zapros();
                  });
                });
              }
            });
          }
        });
      });
    });
}

export default zapros;
