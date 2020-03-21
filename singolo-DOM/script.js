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
var arrow1 = document.getElementById('arrow1');
var arrow2 = document.getElementById('arrow2');
var n = 1;
var q = 1;
var j = 1;

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
    subject.value = "";
    describe.value = "";
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






'use strict';
    var multiItemSlider = (function () {

      function _isElementVisible(element) {
        var rect = element.getBoundingClientRect(),
          vWidth = window.innerWidth || doc.documentElement.clientWidth,
          vHeight = window.innerHeight || doc.documentElement.clientHeight,
          elemFromPoint = function (x, y) { return document.elementFromPoint(x, y) };
        if (rect.right < 0 || rect.bottom < 0
          || rect.left > vWidth || rect.top > vHeight)
          return false;
        return (
          element.contains(elemFromPoint(rect.left, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.top))
          || element.contains(elemFromPoint(rect.right, rect.bottom))
          || element.contains(elemFromPoint(rect.left, rect.bottom))
        );
      }

      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = [], // массив элементов
          _interval = 0,
          _html = _mainElement.innerHTML,
          _states = [
            { active: false, minWidth: 0, count: 1 },
            { active: false, minWidth: 980, count: 2 }
          ],
          _config = {
            isCycling: false, // автоматическая смена слайдов
            direction: 'right', // направление смены слайдов
            interval: 5000, // интервал между автоматической сменой слайдов
            pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
          };

        for (var key in config) {
          if (key in _config) {
            _config[key] = config[key];
          }
        }

        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var _setActive = function () {
          var _index = 0;
          var width = parseFloat(document.body.clientWidth);
          _states.forEach(function (item, index, arr) {
            _states[index].active = false;
            if (width >= _states[index].minWidth)
              _index = index;
          });
          _states[_index].active = true;
        }

        var _getActive = function () {
          var _index;
          _states.forEach(function (item, index, arr) {
            if (_states[index].active) {
              _index = index;
            }
          });
          return _index;
        }

        var position = {
          getItemMin: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position < _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getItemMax: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position > _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getMin: function () {
            return _items[position.getItemMin()].position;
          },
          getMax: function () {
            return _items[position.getItemMax()].position;
          }
        }

        var _transformItem = function (direction) {
          var nextItem;
          if (!_isElementVisible(_mainElement)) {
            return;
          }
          if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
              nextItem = position.getItemMin();
              _items[nextItem].position = position.getMax() + 1;
              _items[nextItem].transform += _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
          }
          if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
              nextItem = position.getItemMax();
              _items[nextItem].position = position.getMin() - 1;
              _items[nextItem].transform -= _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        var _cycle = function (direction) {
          if (!_config.isCycling) {
            return;
          }
          _interval = setInterval(function () {
            _transformItem(direction);
          }, _config.interval);
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('slider__control')) {
            e.preventDefault();
            var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        };

        // обработка события изменения видимости страницы
        var _handleVisibilityChange = function () {
          if (document.visibilityState === "hidden") {
            clearInterval(_interval);
          } else {
            clearInterval(_interval);
            _cycle(_config.direction);
          }
        }

        var _refresh = function () {
          clearInterval(_interval);
          _mainElement.innerHTML = _html;
          _sliderWrapper = _mainElement.querySelector('.slider__wrapper');
          _sliderItems = _mainElement.querySelectorAll('.slider__item');
          _sliderControls = _mainElement.querySelectorAll('.slider__control');
          _sliderControlLeft = _mainElement.querySelector('.slider__control_left');
          _sliderControlRight = _mainElement.querySelector('.slider__control_right');
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width);
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width);
          _positionLeftItem = 0;
          _transform = 0;
          _step = _itemWidth / _wrapperWidth * 100;
          _items = [];
          _sliderItems.forEach(function (item, index) {
            _items.push({ item: item, position: index, transform: 0 });
          });
        }

        var _setUpListeners = function () {
          _mainElement.addEventListener('click', _controlClick);
          if (_config.pause && _config.isCycling) {
            _mainElement.addEventListener('mouseenter', function () {
              clearInterval(_interval);
            });
            _mainElement.addEventListener('mouseleave', function () {
              clearInterval(_interval);
              _cycle(_config.direction);
            });
          }
          document.addEventListener('visibilitychange', _handleVisibilityChange, false);
          window.addEventListener('resize', function () {
            var
              _index = 0,
              width = parseFloat(document.body.clientWidth);
            _states.forEach(function (item, index, arr) {
              if (width >= _states[index].minWidth)
                _index = index;
            });
            if (_index !== _getActive()) {
              _setActive();
              _refresh();
            }
          });
        }

        // инициализация
        _setUpListeners();
        if (document.visibilityState === "visible") {
          _cycle(_config.direction);
        }
        _setActive();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          },
          stop: function () { // метод stop
            _config.isCycling = false;
            clearInterval(_interval);
          },
          cycle: function () { // метод cycle 
            _config.isCycling = true;
            clearInterval(_interval);
            _cycle();
          }
        }

      }
    }());

    var slider = multiItemSlider('.slider', {
      isCycling: true
    })