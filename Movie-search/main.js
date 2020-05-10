var body = document.getElementById('body');
var input = document.getElementById('input');
var search = document.getElementById('search');
var posters = document.getElementsByClassName('posters');
var titles = document.getElementsByClassName('title');
var years = document.getElementsByClassName('year');
var ratings = document.getElementsByClassName('ratings');
var result = document.getElementById('result');
var searchClear = document.getElementById('search-clear');
var registration = document.getElementById('registration');
const url = `https://www.omdbapi.com/?s=dream&apikey=5f85f0e7`;
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    for (var i = 0; i < titles.length; i++) {
        var tittle = titles[i];
        tittle.href = `https://www.imdb.com/title/${data.Search[i].imdbID}/videogallery`;
        tittle.innerHTML = data.Search[i].Title;
    }
    for (var i = 0; i < posters.length; i++) {
        var poster = posters[i];
        poster.style.backgroundImage = `url(${data.Search[i].Poster})`;
    }
    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        year.innerHTML = data.Search[i].Year;
    }
    for (let i = 0; i < ratings.length; i++) {
        let rating = ratings[i];
        var url = `https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=5f85f0e7`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            rating.innerHTML = data.imdbRating;
        });
    }
});
input.onkeydown = function (e) {
	if (e.code == "Enter") {
        if (input.value != "") {
		GetApi();
    }
	 else {
		result.innerHTML = `Empty string`;
	}
}
}
search.onclick = function (e) {
	if (input.value != "") {
		GetApi();
	} else {
		result.innerHTML = `Empty string`;
	}
}
async function GetApi() {
    		const value = input.value;
  const Yurl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200421T160423Z.8c255bd89895f709.283d1cd4e12d5444b778a5d07180571ea233f43f&text=${value}&lang=ru-en`;
  const res = await fetch(Yurl);
  const data = await res.json();
  const translation = data.text[0].replace(/^The /gi, '');
  if (/[А-Я-Ё]/gi.test(value)) {
  	result.innerHTML = `Showing results for "${translation}"`;
  } else {
  	result.innerHTML = "";
  }
  
const url = `https://www.omdbapi.com/?s=${translation}&apikey=5f85f0e7`;
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    try {
        for (var i = 0; i < titles.length; i++) {
        var tittle = titles[i];
        tittle.href = `https://www.imdb.com/title/${data.Search[i].imdbID}/videogallery`;
        tittle.innerHTML = data.Search[i].Title;
    }
    for (var i = 0; i < posters.length; i++) {
        var poster = posters[i];
        poster.style.backgroundImage = `url(${data.Search[i].Poster})`;
    }
    for (var i = 0; i < years.length; i++) {
        var year = years[i];
        year.innerHTML = data.Search[i].Year;
    }
    for (var i = 0; i < posters.length; i++) {
        if (data.Search[i].Poster == "N/A") {
            posters[i].style.backgroundImage = `url(assets/no-photo.png)`;
            posters[i].style.backgroundSize = `contain`;
        }
    }
    	for (let i = 0; i < ratings.length; i++) {
        let rating = ratings[i];
        var url = `https://www.omdbapi.com/?i=${data.Search[i].imdbID}&apikey=5f85f0e7`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            rating.innerHTML = data.imdbRating;
        });
    }
    } catch(e) {
    	result.innerHTML = `No results for "${input.value}"`;
    }
});
}
// Клавиатура

var c = 1;
var v = 1;
var b = 0;

const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");
        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
        });
    },

    _createKeys() {
        var fragment = document.createDocumentFragment();
        var keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space", "←", "→", "language"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
        	searchClear.onclick = function () {
        		input.value = "";
        		Keyboard.properties.value = "";
        	}
            return `<i class="material-icons">${icon_name}</i>`;
        };

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {

                case "language":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("language");

                    keyElement.addEventListener("click", () => {
                        m++;
                        this._languageChange();
                        this._triggerEvent("oninput");
                    });

                    break;

                case "←":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("←");

                    keyElement.addEventListener("click", () => {
                        function setCaretPosition(ctrl, pos) {
                            if (ctrl.setSelectionRange) {
                                ctrl.focus();
                                ctrl.setSelectionRange(pos, pos);
                            } else if (ctrl.createTextRange) {
                                var range = ctrl.createTextRange();
                                range.collapse(true);
                                range.moveEnd('character', pos);
                                range.moveStart('character', pos);
                                range.select();
                            }
                        }
                        if (c > input.value.length) {
                        c = 0;
                    }
                    setCaretPosition(input, input.value.length - c);
                        c++;
                        this._triggerEvent("oninput");
                    });

                    break;

                case "→":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("→");

                    keyElement.addEventListener("click", () => {
                        function setCaretPosition(ctrl, pos) {
                            if (ctrl.setSelectionRange) {
                                ctrl.focus();
                                ctrl.setSelectionRange(pos, pos);
                            } else if (ctrl.createTextRange) {
                                var range = ctrl.createTextRange();
                                range.collapse(true);
                                range.moveEnd('character', pos);
                                range.moveStart('character', pos);
                                range.select();
                            }
                        }
                        if (v > input.value.length) {
                        v = 0;
                    }
                    setCaretPosition(input, v);
                        v++;
                        this._triggerEvent("oninput");
                    });

                    break;

                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                case "caps":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");

                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock();
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", (e) => {
                        function insertText( id, text ) {
                        var txtarea = document.getElementById(id);
                        var start = txtarea.selectionStart;
                        var end = txtarea.selectionEnd;
                        var finText = txtarea.value.substring(0, start) + text + txtarea.value.substring(end);
                        txtarea.value = finText;
                        txtarea.focus();
                        txtarea.selectionEnd = ( start == end )? (end + text.length) : end ;
                    }
                    this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                        insertText("input", this.properties.capsLock ? key.toUpperCase() : key.toLowerCase());
                    


                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
        

    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
    }
};

window.addEventListener("DOMContentLoaded", function () {
    Keyboard.init();
    var done = document.getElementsByClassName('keyboard__key keyboard__key--wide keyboard__key--dark');
    done[0].onclick = function (e) {
    	if (input.value != "") {
    	GetApi();
    } else {
    	result.innerHTML = `Empty string`;
    }
    }

    done[0].addEventListener('click', function (e) {
    	if (input.value != "") {
		preloader.classList.remove("hide");
  setTimeout(function() {
    preloader.classList.add("hide");
  }, 1500);
	} else {
		result.innerHTML = `Empty string`;
	}
    });
});

// СЛАЙДЕР

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// ПРЕЛОАДЕР
var preloader = document.getElementById('page-preloader');


try {
window.onload = function () {
  preloader.classList.remove("hide");
  setTimeout(function() {
    preloader.classList.add("hide");
  }, 1500);
}

search.addEventListener('click', function () {
  if (input.value != "") {
		preloader.classList.remove("hide");
  setTimeout(function() {
    preloader.classList.add("hide");
  }, 1500);
	} else {
		result.innerHTML = `Empty string`;
	}
});

input.addEventListener('keydown', function (e) {
	if (e.code == "Enter") {
	if (input.value != "") {
		preloader.classList.remove("hide");
  setTimeout(function() {
    preloader.classList.add("hide");
  }, 1500);
	} else {
		result.innerHTML = `Empty string`;
	}
}
});
} catch(e) {

}

// GOOGLE REGISTRATION

var j = 1;

var gSignin2 = document.getElementsByClassName('g-signin2');
var userImage = document.getElementsByClassName('user-image');
var userName = document.getElementsByClassName('user-name');
var userEmail = document.getElementsByClassName('user-email');
var request = document.getElementsByClassName('request');
var lastRequest = document.getElementsByClassName('last-request');
userImage[0].style.display = "none";

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id = profile.getId(); // Do not send to your backend! Use an ID token instead.
  var name = profile.getName();
  var image = profile.getImageUrl();
  var email = profile.getEmail(); // This is null if the 'email' scope is not present.
  gSignin2[0].remove();
  userImage[0].src = image;
  userName[0].innerHTML = name;
  userName[0].style.color = "black";
  userImage[0].style.display = "block";
  userEmail[0].innerHTML = email;
}

userImage[0].addEventListener("click", function (e) {
    if (j % 2 != 0) {
    request[0].style.display = "block";
    request[0].innerHTML = input.value;
    lastRequest[0].style.display = "block";
} else {
    request[0].style.display = "none";
    lastRequest[0].style.display = "none";
}
j++;
});

window.addEventListener('resize', function () {
    if (document.documentElement.clientWidth < 1000) {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}

if (document.documentElement.clientWidth < 600) {
    swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
    });
}
if (document.documentElement.clientWidth > 1000) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
}
});




