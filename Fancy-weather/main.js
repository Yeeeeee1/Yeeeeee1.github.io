var body = document.getElementById('body');
var spinner = document.getElementById('spinner');
var buttonF = document.getElementById('buttonF');
var buttonC = document.getElementById('buttonC');
var feelLike = document.getElementById('feels-like');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humidity');
var input = document.getElementsByClassName('search-input')[0];
var search = document.getElementsByClassName('button search-input__button')[0];
var mapCluster = document.getElementsByClassName('map-cluster')[0];
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var microphone = document.getElementById('microphone');
var forecastDay = document.getElementById('forecast__day');
var forecastTemperature = document.getElementById('forecast__temperature');
var forecastIcon = document.getElementById('forecast__icon');
var forecastDay2 = document.getElementById('forecast__day2');
var forecastTemperature2 = document.getElementById('forecast__temperature2');
var forecastIcon2 = document.getElementById('forecast__icon2');
var forecastDay3 = document.getElementById('forecast__day3');
var forecastTemperature3 = document.getElementById('forecast__temperature3');
var forecastIcon3 = document.getElementById('forecast__icon3');
var map = document.querySelector('.ymaps-2-1-75-map');
var trickerItemDay = document.getElementById('tricker-item-day');
var trickerItemTemp = document.getElementById('tricker-item-temp');
var trickerItemDesc = document.getElementById('tricker-item-desc');
var trickerItemWind = document.getElementById('tricker-item-wind');
var trickerItemHum = document.getElementById('tricker-item-hum');
var trickerItemDay1 = document.getElementById('tricker-item-day1');
var trickerItemTemp1 = document.getElementById('tricker-item-temp1');
var trickerItemDesc1 = document.getElementById('tricker-item-desc1');
var trickerItemWind1 = document.getElementById('tricker-item-wind1');
var trickerItemHum1 = document.getElementById('tricker-item-hum1');
var trickerItemDay2 = document.getElementById('tricker-item-day2');
var trickerItemTemp2 = document.getElementById('tricker-item-temp2');
var trickerItemDesc2 = document.getElementById('tricker-item-desc2');
var trickerItemWind2 = document.getElementById('tricker-item-wind2');
var trickerItemHum2 = document.getElementById('tricker-item-hum2');
var trickerItemDay3 = document.getElementById('tricker-item-day3');
var trickerItemTemp3 = document.getElementById('tricker-item-temp3');
var trickerItemDesc3 = document.getElementById('tricker-item-desc3');
var trickerItemWind3 = document.getElementById('tricker-item-wind3');
var trickerItemHum3 = document.getElementById('tricker-item-hum3');
var trickerItemDay4 = document.getElementById('tricker-item-day4');
var trickerItemTemp4 = document.getElementById('tricker-item-temp4');
var trickerItemDesc4 = document.getElementById('tricker-item-desc4');
var trickerItemWind4 = document.getElementById('tricker-item-wind4');
var trickerItemHum4 = document.getElementById('tricker-item-hum4');
var trickerItemDay5 = document.getElementById('tricker-item-day5');
var trickerItemTemp5 = document.getElementById('tricker-item-temp5');
var trickerItemDesc5 = document.getElementById('tricker-item-desc5');
var trickerItemWind5 = document.getElementById('tricker-item-wind5');
var trickerItemHum5 = document.getElementById('tricker-item-hum5');
var trickerItemDay6 = document.getElementById('tricker-item-day6');
var trickerItemTemp6 = document.getElementById('tricker-item-temp6');
var trickerItemDesc6 = document.getElementById('tricker-item-desc6');
var trickerItemWind6 = document.getElementById('tricker-item-wind6');
var trickerItemHum6 = document.getElementById('tricker-item-hum6');
var b = 1;
var t = 1;
var y = 1;
var l = 1;

if (y == 1) {
const ipUrl = "https://ipinfo.io/json?token=90dfb5a8f4afdd";
fetch(ipUrl)
  .then(res => res.json())
  .then(data => {
  	var city = data.city;
  	var WUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
fetch(WUrl)
	.then(res => res.json())
	.then(data => {
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [data.coord.lat, data.coord.lon],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([data.coord.lat, data.coord.lon], {
            balloonContent: `${city}`
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}
});
  	});
  y = 2;
}

function changeLang() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
}

buttonF.onclick = function () {
	buttonF.classList.remove("button--f");
	buttonF.classList.add("button--f-active");
	buttonC.classList.remove("button--c");
	buttonC.classList.add("button--c-active");
	document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML = Math.ceil(parseInt(document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML) * 9/5 + 32);
	forecastTemperature.innerHTML = Math.ceil(parseInt(forecastTemperature.innerHTML) * 9/5 + 32) + "°";
	forecastTemperature2.innerHTML = Math.ceil(parseInt(forecastTemperature2.innerHTML) * 9/5 + 32) + "°";
	forecastTemperature3.innerHTML = Math.ceil(parseInt(forecastTemperature3.innerHTML) * 9/5 + 32) + "°";
	trickerItemTemp.innerHTML = Math.ceil(parseInt(trickerItemTemp.innerHTML) * 9/5 + 32) + "°";
	trickerItemTemp1.innerHTML = Math.ceil(parseInt(trickerItemTemp1.innerHTML) * 9/5 + 32) + "°";
	trickerItemTemp2.innerHTML = Math.ceil(parseInt(trickerItemTemp2.innerHTML) * 9/5 + 32) + "°";
	trickerItemTemp3.innerHTML = Math.ceil(parseInt(trickerItemTemp3.innerHTML) * 9/5 + 32) + "°";
	trickerItemTemp4.innerHTML = Math.ceil(parseInt(trickerItemTemp4.innerHTML) * 9/5 + 32) + "°";
	trickerItemTemp5.innerHTML = Math.ceil(parseInt(trickerItemTemp5.innerHTML) * 9/5 + 32) + "°";
	trickerItemTemp6.innerHTML = Math.ceil(parseInt(trickerItemTemp6.innerHTML) * 9/5 + 32) + "°";
	t = 1;
	localStorage.setItem("temp", t);
	buttonF.disabled = true;
	buttonC.disabled = false;
}

buttonC.onclick = function () {
	buttonF.classList.remove("button--f-active");
	buttonF.classList.add("button--f");
	buttonC.classList.remove("button--c-active");
	buttonC.classList.add("button--c");
	const ipUrl = "https://ipinfo.io/json?token=90dfb5a8f4afdd";
fetch(ipUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    var city = data.city;
    document.getElementsByClassName("weather-data-cluster__location")[0].innerHTML = data.city + ", " + data.country;
    var randomNum = Math.ceil(Math.random() * 10);
    var WUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
fetch(WUrl)
	.then(res => res.json())
	.then(data => {
		document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML = Math.ceil(data.main.temp - 273);

});
	const WDurl = `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
	fetch(WDurl)
	.then(res => res.json())
	.then(data => {
	});
});
  t = 2;
  localStorage.setItem("temp", t);
  buttonF.disabled = false;
	buttonC.disabled = true;

}

if(localStorage.getItem("temp") == 1) {
	buttonF.disabled = true;
	buttonC.disabled = false;
	buttonF.classList.remove("button--f");
	buttonF.classList.add("button--f-active");
	buttonC.classList.remove("button--c");
	buttonC.classList.add("button--c-active");
	document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML = Math.ceil(parseInt(document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML) * 9/5 + 32);
	t = 1;
	localStorage.setItem("temp", t);
}
if(localStorage.getItem("temp") == 2) {
	buttonF.disabled = false;
	buttonC.disabled = true;
	buttonF.classList.remove("button--f-active");
	buttonF.classList.add("button--f");
	buttonC.classList.remove("button--c-active");
	buttonC.classList.add("button--c");
	const ipUrl = "https://ipinfo.io/json?token=90dfb5a8f4afdd";
fetch(ipUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    var city = data.city;
    document.getElementsByClassName("weather-data-cluster__location")[0].innerHTML = data.city + ", " + data.country;
    var randomNum = Math.ceil(Math.random() * 10);
    var WUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
fetch(WUrl)
	.then(res => res.json())
	.then(data => {
		document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML = Math.ceil(data.main.temp - 273);
});
});
  t = 2;
  localStorage.setItem("temp", t);
}


const ipUrl = "https://ipinfo.io/json?token=90dfb5a8f4afdd";
fetch(ipUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    var city = data.city;
    document.getElementsByClassName("weather-data-cluster__location")[0].innerHTML = data.city + ", " + data.country;
    var randomNum = Math.ceil(Math.random() * 100);
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=374b1be904fa5d2623d801f57536233d&tags=weather,${city}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
    const WDurl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
	fetch(WDurl)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		var date = new Date();
		for (let i = 0; i < data.list.length; i++) {
			if (data.list[i].dt_txt.slice(8, -8) == date.getDate()) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
					trickerItemDay.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					trickerItemTemp.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
					trickerItemDesc.innerHTML = data.list[i].weather[0].description;
					trickerItemWind.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 1) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay.innerHTML = getWeekDay(new Date(year, month, day));
				forecastTemperature.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon.src = "assets/day.svg";
		} else {
			forecastIcon.src = "assets/night.svg";
		}
		}
					trickerItemDay1.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					trickerItemTemp1.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
					trickerItemDesc1.innerHTML = data.list[i].weather[0].description;
					trickerItemWind1.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum1.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 2) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay2.innerHTML = getWeekDay(new Date(year, month, day));
				forecastTemperature2.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon2.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon2.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon2.src = "assets/day.svg";
		} else {
			forecastIcon2.src = "assets/night.svg";
		}
		}
			    trickerItemDay2.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					trickerItemTemp2.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
					trickerItemDesc2.innerHTML = data.list[i].weather[0].description;
					trickerItemWind2.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum2.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}

			if (parseInt(data.list[i].dt_txt.slice(8, -8), 10) == (date.getDate() + 3) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay3.innerHTML = getWeekDay(new Date(year, month, day));
				forecastTemperature3.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon3.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon3.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon3.src = "assets/day.svg";
		} else {
			forecastIcon3.src = "assets/night.svg";
		}
		}
			    trickerItemDay3.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					trickerItemTemp3.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
					trickerItemDesc3.innerHTML = data.list[i].weather[0].description;
					trickerItemWind3.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum3.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(9, -8) == (date.getDate() + 4) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
			    trickerItemDay4.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					trickerItemTemp4.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
					trickerItemDesc4.innerHTML = data.list[i].weather[0].description;
					trickerItemWind4.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum4.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(9, -8) == (date.getDate() + 5) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
			    trickerItemDay5.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					trickerItemTemp5.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
					trickerItemDesc5.innerHTML = data.list[i].weather[0].description;
					trickerItemWind5.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum5.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(9, -8) == (date.getDate() + 5) - 31 && data.list[i].dt_txt.slice(14) == "00:00") {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];
				var day = parseInt(data.list[i].dt_txt.slice(8, -8)) + 1;
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
			    trickerItemDay6.innerHTML = days[day] + ":";
					trickerItemTemp6.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
					trickerItemDesc6.innerHTML = data.list[i].weather[0].description;
					trickerItemWind6.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum6.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
		}
	});
fetch(url)
  .then(res => res.json())
  .then(data => {
    body.style.background = `url(${data.photos.photo[randomNum].url_h}) center center / cover fixed`;
});
    var WUrl = `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
fetch(WUrl)
	.then(res => res.json())
	.then(data => {
		console.log(data);

		var date = new Date;

		const msg = new SpeechSynthesisUtterance();
		let voices = [];
		const speakButton = document.querySelector('#speak');
		const stopButton = document.querySelector('#stop');
		msg.text = `today is the ${date.getDate()}th day on the street ${Math.ceil(data.main.temp - 273)} degrees of heat, it feels like ${Math.ceil(data.main.feels_like - 273)} degrees, wind ${data.wind.speed} meters per second and humidity ${data.main.humidity} percent`;


		function toggle(startOver = true) {
			speechSynthesis.cancel();
			if (startOver) {
				speechSynthesis.speak(msg);
			} 
		}

		speakButton.addEventListener('click', toggle);
		stopButton.addEventListener('click', () => toggle(false));

				spinner.onclick = function () {
const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=374b1be904fa5d2623d801f57536233d&tags=weather,${data.weather[0].main}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
fetch(url)
  .then(res => res.json())
  .then(data => {
  	var randomNum = Math.ceil(Math.random() * 100);
    body.style.background = `url(${data.photos.photo[randomNum].url_h}) center center / cover fixed`;
  });
}
		var minutesLon = Math.round((data.coord.lon - Math.trunc(data.coord.lon)) * 60);
		var minutesLat = Math.round((data.coord.lat - Math.trunc(data.coord.lat)) * 60);
		longitude.innerHTML = "Longitude: " + Math.floor(data.coord.lon) + "°" + minutesLon + "'";
		latitude.innerHTML = "Latitude: " + Math.floor(data.coord.lat) + "°" + minutesLat + "'";
		feelLike.innerHTML += Math.ceil(data.main.feels_like - 273) + "°";
		wind.innerHTML += data.wind.speed + "m/s";
		humidity.innerHTML += data.main.humidity + "%";
		if (localStorage.getItem("temp") == 1) {
		var temperature = Math.ceil((data.main.temp - 273) * 9/5 + 32);
	} if (localStorage.getItem("temp") == 2) {
		var temperature = Math.ceil(data.main.temp - 273);
	}
		document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML = temperature;
		if (data.weather[0].main == "Clouds") {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/cloudy.svg";
		}
		if (data.weather[0].main == "Rain") {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/rainy-6.svg";
		}
		if (data.weather[0].main == "Clear") {
			if (document.getElementsByClassName(parseInt("weather-data-cluster__data-time")[0].innerHTML).slice(16, -3) < 18) {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/day.svg";
		} else {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/night.svg";
		}
		}
});
	nextThreeDays();
	function nextThreeDays() {
	const WDurl = `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
	fetch(WDurl)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		var date = new Date();
		for (let i = 0; i < data.list.length; i++) {
			if (data.list[i].dt_txt.slice(8, -8) == date.getDate()) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 1) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay.innerHTML = getWeekDay(new Date(year, month, day));
				if (localStorage.getItem("temp") == 1) {
					forecastTemperature.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
					trickerItemTemp1.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				forecastTemperature.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
				trickerItemTemp1.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon.src = "assets/day.svg";
		} else {
			forecastIcon.src = "assets/night.svg";
		}
		}
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 2) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay2.innerHTML = getWeekDay(new Date(year, month, day));
				if (localStorage.getItem("temp") == 1) {
					forecastTemperature2.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
					trickerItemTemp2.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				forecastTemperature2.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
				trickerItemTemp2.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon2.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon2.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon2.src = "assets/day.svg";
		} else {
			forecastIcon2.src = "assets/night.svg";
		}
		}
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 3) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay3.innerHTML = getWeekDay(new Date(year, month, day));
				if (localStorage.getItem("temp") == 1) {
					forecastTemperature3.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
					trickerItemTemp3.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				forecastTemperature3.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
				trickerItemTemp3.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon3.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon3.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon3.src = "assets/day.svg";
		} else {
			forecastIcon3.src = "assets/night.svg";
		}
		}
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 4) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp4.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp4.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 5) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp5.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp5.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 6) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp6.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp6.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
			}
		}
	});
}
	buttonC.addEventListener("click", function () {
		nextThreeDays();
	});
});
function dateUpdate() {
	var date = new Date();
	var nowDate = date.toString();
	nowDate = nowDate.slice(0, -40);
	document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML = nowDate;
}
var interval = setInterval(dateUpdate, 1);



function searching(a) {
var WUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
fetch(WUrl)
	.then(res => res.json())
	.then(data => {
		try {
		console.log(data);

		clearInterval(interval);


		var city = data.name;

		var date = new Date;

		const msg = new SpeechSynthesisUtterance();
		let voices = [];
		const speakButton = document.querySelector('#speak');
		const stopButton = document.querySelector('#stop');
		msg.text = `today is the ${date.getDate()}th day on the street ${Math.ceil(data.main.temp - 273)} degrees of heat, it feels like ${Math.ceil(data.main.feels_like - 273)} degrees, wind ${data.wind.speed} meters per second and humidity ${data.main.humidity} percent`;


		function toggle(startOver = true) {
			speechSynthesis.cancel();
			if (startOver) {
				speechSynthesis.speak(msg);
			} 
		}

		speakButton.addEventListener('click', toggle);
		stopButton.addEventListener('click', () => toggle(false));




		const WDurl = `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
	fetch(WDurl)
	.then(res => res.json())
	.then(data => {
		console.log(data);
		var date = new Date();
		for (let i = 0; i < data.list.length; i++) {
			if (data.list[i].dt_txt.slice(8, -8) == date.getDate()) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
					trickerItemDay.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
					trickerItemDesc.innerHTML = data.list[i].weather[0].description;
					trickerItemWind.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 1) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay.innerHTML = getWeekDay(new Date(year, month, day));
				if (localStorage.getItem("temp") == 1) {
					forecastTemperature.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				forecastTemperature.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon.src = "assets/day.svg";
		} else {
			forecastIcon.src = "assets/night.svg";
		}
		}
					trickerItemDay1.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp1.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp1.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
					trickerItemDesc1.innerHTML = data.list[i].weather[0].description;
					trickerItemWind1.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum1.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(8, -8) == (date.getDate() + 2) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay2.innerHTML = getWeekDay(new Date(year, month, day));
				if (localStorage.getItem("temp") == 1) {
					forecastTemperature2.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				forecastTemperature2.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon2.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon2.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon2.src = "assets/day.svg";
		} else {
			forecastIcon2.src = "assets/night.svg";
		}
		}
			    trickerItemDay2.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp2.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp2.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
					trickerItemDesc2.innerHTML = data.list[i].weather[0].description;
					trickerItemWind2.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum2.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (parseInt(data.list[i].dt_txt.slice(8, -8), 10) == (date.getDate() + 3) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
				forecastDay3.innerHTML = getWeekDay(new Date(year, month, day));
				if (localStorage.getItem("temp") == 1) {
					forecastTemperature3.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				forecastTemperature3.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
				if (data.list[i].weather[0].main == "Clouds") {
			forecastIcon3.src = "assets/cloudy.svg";
		}
		if (data.list[i].weather[0].main == "Rain") {
			forecastIcon3.src = "assets/rainy-6.svg";
		}
		if (data.list[i].weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			forecastIcon3.src = "assets/day.svg";
		} else {
			forecastIcon3.src = "assets/night.svg";
		}
		}
			    trickerItemDay3.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp3.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp3.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
					trickerItemDesc3.innerHTML = data.list[i].weather[0].description;
					trickerItemWind3.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum3.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(9, -8) == (date.getDate() + 4) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
			    trickerItemDay4.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp4.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp4.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
					trickerItemDesc4.innerHTML = data.list[i].weather[0].description;
					trickerItemWind4.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum4.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(9, -8) == (date.getDate() + 5) - 31) {
				function getWeekDay(date) {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];

					return days[date.getDay()];
				}
				var day = data.list[i].dt_txt.slice(8, -8);
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
			    trickerItemDay5.innerHTML = getWeekDay(new Date(year, month, day)) + ":";
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp5.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp5.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
					trickerItemDesc5.innerHTML = data.list[i].weather[0].description;
					trickerItemWind5.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum5.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
			if (data.list[i].dt_txt.slice(9, -8) == (date.getDate() + 5) - 31 && data.list[i].dt_txt.slice(14) == "00:00") {
					let days = ['ВОСКРЕСЕНЬЕ', 'ПОНЕДЕЛЬНИК', 'ВТОРНИК', 'СРЕДА', 'ЧЕТВЕРГ', 'ПЯТНИЦА', 'СУББОТА'];
				var day = parseInt(data.list[i].dt_txt.slice(8, -8)) + 1;
				var year = data.list[i].dt_txt.slice(0, -15);
				var month = "0" + Number(data.list[i].dt_txt.slice(6, -12)) - 1;
			    trickerItemDay6.innerHTML = days[day] + ":";
					if (localStorage.getItem("temp") == 1) {
					trickerItemTemp6.innerHTML = Math.ceil((data.list[i].main.temp - 273) * 9/5 + 32) + "°";
				} if (localStorage.getItem("temp") == 2) {
				trickerItemTemp6.innerHTML = Math.ceil(data.list[i].main.temp - 273) + "°";
			    }
					trickerItemDesc6.innerHTML = data.list[i].weather[0].description;
					trickerItemWind6.innerHTML = "Wind: " + Math.trunc(data.list[i].wind.speed) + " m/s";
					trickerItemHum6.innerHTML = "Humidity: " + data.list[i].main.humidity + "%";
			}
		}
	});





		search.disabled = false;
	input.disabled = false;
	input.placeholder = "Search city or ZIP";
	input.value = "";
	search.classList.remove("disabled");
	input.style.setProperty("--placeholder", "white");
	input.classList.remove("search-field-error");
		var minutesLon = Math.round((data.coord.lon - Math.trunc(data.coord.lon)) * 60);
		var minutesLat = Math.round((data.coord.lat - Math.trunc(data.coord.lat)) * 60);
		longitude.innerHTML = "Longitude: " + Math.floor(data.coord.lon) + "°" + minutesLon + "'";
		latitude.innerHTML = "Latitude: " + Math.floor(data.coord.lat) + "°" + minutesLat + "'";
		  	var WUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=4efdd5def7fbf5aeca0978952b257e3a`;
var map = document.getElementById('map').remove();
var div = document.createElement("div");
div.classList.add("map-cluster__map");
div.id = "map";
mapCluster.prepend(div);
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [data.coord.lat, data.coord.lon],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8, 37.8]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я тащусь',
                hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([data.coord.lat, data.coord.lon], {
            balloonContent: `${city}`
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}

		if (localStorage.getItem("temp") == 1) {
			document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML = Math.ceil((data.main.temp - 273) * 9/5 + 32);
		}

		if (localStorage.getItem("temp") == 2) {
			document.getElementsByClassName("weather-data-cluster__temperature-today")[0].innerHTML = Math.ceil(data.main.temp - 273);
		}

		var randomNum = Math.ceil(Math.random() * 100);
const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=374b1be904fa5d2623d801f57536233d&tags=weather,${data.weather[0].main}&tag_mode=all&extras=url_h&format=json&nojsoncallback=1`;
fetch(url)
  .then(res => res.json())
  .then(data => {
    body.style.background = `url(${data.photos.photo[randomNum].url_h}) center center / cover fixed`;
});


		function UpdateTime() {
		var date = new Date();
		var timezone = data.timezone;
		timezone = timezone / 60;
		timezone = Math.abs(timezone / 60);
		var usTimezone = Math.abs(date.getTimezoneOffset() / 60);
		var hour = date.getHours();
		if (timezone < usTimezone) {
		var searchTimezone = usTimezone - timezone;
		var realHour = hour - searchTimezone;
		if (realHour > 24) {
			var realHour = realHour - 24;
		}
	}
	if (timezone > usTimezone) {
		var searchTimezone = timezone + usTimezone;
		var realHour = hour + searchTimezone;
		if (realHour > 24) {
			var realHour = realHour - 24;
		}
	}
	if (timezone == usTimezone) {
		var realHour = hour;
	}
	var nowDate = date.toString();
	var arr = nowDate.split(" ");
	arr.splice(4, 6);
	var minutes = date.getMinutes();
	var mStr = minutes.toString();

	if (mStr.length == 2) {
	var time = realHour + ":" + minutes;
	arr.push(time);
	} if (mStr.length == 1) {
	var time = realHour + ":" + "0" + minutes;
	arr.push(time);
	}
	var cstr = arr.join();
	cstr = arr.join(" ");
	nowDate = cstr;
	document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML = nowDate;
}
setInterval(UpdateTime, 1);
		document.getElementsByClassName("weather-data-cluster__location")[0].innerHTML = data.name + ", " + data.sys.country;
	if (data.weather[0].main == "Clouds") {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/cloudy.svg";
		}
		if (data.weather[0].main == "Rain") {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/rainy-6.svg";
		}
		if (data.weather[0].main == "Clear") {
			if (document.getElementsByClassName("weather-data-cluster__data-time")[0].innerHTML.slice(16, -3) < 18) {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/day.svg";
		} else {
			document.getElementsByClassName("weather-data-cluster__weather-icon")[0].src = "assets/night.svg";
		}
		}
	} catch(e) {
	input.placeholder = "Incorrect data";
	input.style.setProperty("--placeholder", "rgba(226,31,31,.87)");
	input.classList.add("search-field-error");
	input.value = "";
}
});
}


search.onclick = function () {
	searching();
}

input.onkeydown = function (e) {
	if (e.code == "Enter") {
		searching();
	}
}
var m = 0;
microphone.onclick = async function () {
	try {
	m++;
	search.disabled = true;
	input.disabled = true;
	input.placeholder = "What place do you want to find?";
	input.value = "";
	search.classList.add("disabled");
	window.webkitSpeechRecognition = window.webkitSpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', async e => {
      const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');
      try {
      const Yurl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200421T160423Z.8c255bd89895f709.283d1cd4e12d5444b778a5d07180571ea233f43f&text=${transcript}&lang=ru-en`;
      const res = await fetch(Yurl);
      const data = await res.json();
      const translation = data.text[0].replace(/^The /gi, '');
      input.value = translation;
      searching();
  } catch(e) {
  	alert(logMyErrors(e));
  }
    });
      
    recognition.start();
} catch(e) {
	search.disabled = false;
	input.disabled = false;
	input.placeholder = "Search city or ZIP";
	input.value = "";
	search.classList.remove("disabled");
	input.style.setProperty("--placeholder", "white");
	input.classList.remove("search-field-error");
}
}

