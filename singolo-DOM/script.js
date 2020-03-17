var leftArrow = document.getElementById('left-arrow');
var rightArrow = document.getElementById('right-arrow');
var main = document.getElementById('main');
var home = document.getElementById('home');
var services = document.getElementById('services');
var portfolio = document.getElementById('portfolio');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var screenVertical = document.getElementById('screen-vertical');
var screenHorizontal = document.getElementById('screen-horizontal');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var ten = document.getElementById('ten');
var eleven = document.getElementById('eleven');
var twelve = document.getElementById('twelve');
var all = document.getElementById('all');
var webDesign = document.getElementById('web-design');
var graphicDesign = document.getElementById('graphic-design');
var artwork = document.getElementById('artwork');
var submit = document.getElementById('submit');
var subject = document.getElementById('subject');
var describe = document.getElementById('describe');
var n = 1;
var q = 1;
var j = 1;
leftArrow.onclick = function () {
	if (n % 2 != 0) {
		main.style.background = "url(assets/slide_2.png)";
		screenVertical.style.display = "none";
		screenHorizontal.style.display = "none";
	} else {
		main.style.background = "url(assets/singolo1.png)";
		screenVertical.style.display = "";
		screenHorizontal.style.display = "";
	}
	n++;
}
rightArrow.onclick = function () {
	if (n % 2 == 0) {
		main.style.background = "url(assets/singolo1.png)";
		screenVertical.style.display = "";
		screenHorizontal.style.display = "";
	} else {
		main.style.background = "url(assets/slide_2.png)";
		screenVertical.style.display = "none";
		screenHorizontal.style.display = "none";
	}
	n--;
}

home.onclick = function () {
	home.style.color = "#db655f";
	services.style.color = "white";
	portfolio.style.color = "white";
	about.style.color = "white";
	contact.style.color = "white";
	window.location.hash="header";
}

services.onclick = function () {
	home.style.color = "white";
	services.style.color = "#db655f";
	portfolio.style.color = "white";
	about.style.color = "white";
	contact.style.color = "white";
	window.location.hash="our-services";
}

portfolio.onclick = function () {
	home.style.color = "white";
	services.style.color = "white";
	portfolio.style.color = "#db655f";
	about.style.color = "white";
	contact.style.color = "white";
	window.location.hash="portfolio-block";
}

about.onclick = function () {
	home.style.color = "white";
	services.style.color = "white";
	portfolio.style.color = "white";
	about.style.color = "#db655f";
	contact.style.color = "white";
	window.location.hash="about-us-block";
}

contact.onclick = function () {
	home.style.color = "white";
	services.style.color = "white";
	portfolio.style.color = "white";
	about.style.color = "white";
	contact.style.color = "#db655f";
	window.location.hash="main-block";
}

screenVertical.onclick = function () {
	if (n % 2 != 0 && q % 2 != 0) {
	screenVertical.style.background = "black";
	q++;
	} else {
	screenVertical.style.background = "none";
	q--;
	}
}

screenHorizontal.onclick = function () {
	if (n % 2 != 0 && j % 2 != 0) {
	screenHorizontal.style.background = "black";
	j++;
	} else {
	screenHorizontal.style.background = "none";
	j--;
	}
}

all.onclick = function () {
	one.src = "assets/singolo2.png";
	two.src = "assets/singolo2 (4).png";
	three.src = "assets/singolo2 (8).png";
	four.src = "assets/singolo2 (1).png";
	five.src = "assets/singolo2 (5).png";
	six.src = "assets/singolo2 (9).png";
	seven.src = "assets/singolo2 (2).png";
	eight.src = "assets/singolo2 (6).png";
	nine.src = "assets/singolo2 (10).png";
	ten.src = "assets/singolo2 (3).png";
	eleven.src = "assets/singolo2 (7).png";
	twelve.src = "assets/singolo2 (11).png";
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
	all.style.color = "white";
	all.style.border = "1px solid white"
	webDesign.style.color = "#767e9e";
	webDesign.style.border = "1px solid #666d89";
	graphicDesign.style.color = "#767e9e";
	graphicDesign.style.border = "1px solid #666d89";
	artwork.style.color = "#767e9e";
	artwork.style.border = "1px solid #666d89";
}

webDesign.onclick = function () {
	one.src = "assets/singolo2 (4).png";
	two.src = "assets/singolo2.png";
	three.src = "assets/singolo2 (1).png";
	four.src = "assets/singolo2 (8).png";
	five.src = "assets/singolo2 (9).png";
	six.src = "assets/singolo2 (5).png";
	seven.src = "assets/singolo2 (6).png";
	eight.src = "assets/singolo2 (2).png";
	nine.src = "assets/singolo2 (3).png";
	ten.src = "assets/singolo2 (10).png";
	eleven.src = "assets/singolo2 (11).png";
	twelve.src = "assets/singolo2 (7).png";
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
	all.style.color = "#767e9e";
	all.style.border = "1px solid #666d89"
	webDesign.style.color = "white";
	webDesign.style.border = "1px solid white"
	graphicDesign.style.color = "#767e9e";
	graphicDesign.style.border = "1px solid #666d89";
	artwork.style.color = "#767e9e";
	artwork.style.border = "1px solid #666d89";
}

graphicDesign.onclick = function () {
	one.src = "assets/singolo2 (8).png";
	two.src = "assets/singolo2 (1).png";
	three.src = "assets/singolo2.png";
	four.src = "assets/singolo2 (4).png";
	five.src = "assets/singolo2 (2).png";
	six.src = "assets/singolo2 (6).png";
	seven.src = "assets/singolo2 (5).png";
	eight.src = "assets/singolo2 (9).png";
	nine.src = "assets/singolo2 (7).png";
	ten.src = "assets/singolo2 (11).png";
	eleven.src = "assets/singolo2 (10).png";
	twelve.src = "assets/singolo2 (3).png";
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
	all.style.color = "#767e9e";
	all.style.border = "1px solid #666d89"
	webDesign.style.color = "#767e9e";
	webDesign.style.border = "1px solid #666d89";
	graphicDesign.style.color = "white";
	graphicDesign.style.border = "1px solid white";
	artwork.style.color = "#767e9e";
	artwork.style.border = "1px solid #666d89";
}

artwork.onclick = function () {
	one.src = "assets/singolo2 (1).png";
	two.src = "assets/singolo2 (8).png";
	three.src = "assets/singolo2 (4).png";
	four.src = "assets/singolo2.png";
	five.src = "assets/singolo2 (6).png";
	six.src = "assets/singolo2 (2).png";
	seven.src = "assets/singolo2 (9).png";
	eight.src = "assets/singolo2 (5).png";
	nine.src = "assets/singolo2 (11).png";
	ten.src = "assets/singolo2 (7).png";
	eleven.src = "assets/singolo2 (3).png";
	twelve.src = "assets/singolo2 (10).png";
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
	all.style.color = "#767e9e";
	all.style.border = "1px solid #666d89"
	webDesign.style.color = "#767e9e";
	webDesign.style.border = "1px solid #666d89";
	graphicDesign.style.color = "#767e9e";
	graphicDesign.style.border = "1px solid #666d89";
	artwork.style.color = "white";
	artwork.style.border = "1px solid white";
}

submit.onclick = function () {
	if (subject.value.length != 0 && describe.value.length != 0) {
	alert("Письмо отправлено \nТема: " + subject.value + "\n" + "Описание: " + describe.value);
    } else {
    	alert("Письмо отправлено \nБез темы \nБез описания");
    }
}

one.onclick = function () {
	one.style.border = "5px solid #F06C64";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}

two.onclick = function () {
	one.style.border = "none";
	two.style.border = "5px solid #F06C64";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
three.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "5px solid #F06C64";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
four.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "5px solid #F06C64";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
five.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "5px solid #F06C64";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
six.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "5px solid #F06C64";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
seven.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "5px solid #F06C64";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
eight.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "5px solid #F06C64";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
nine.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "5px solid #F06C64";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
ten.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "5px solid #F06C64";
	eleven.style.border = "none";
	twelve.style.border = "none";
}
eleven.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "5px solid #F06C64";
	twelve.style.border = "none";
}
twelve.onclick = function () {
	one.style.border = "none";
	two.style.border = "none";
	three.style.border = "none";
	four.style.border = "none";
	five.style.border = "none";
	six.style.border = "none";
    seven.style.border = "none";
	eight.style.border = "none";
	nine.style.border = "none";
	ten.style.border = "none";
	eleven.style.border = "none";
	twelve.style.border = "5px solid #F06C64";
}