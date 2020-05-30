/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("window.addEventListener('DOMContentLoaded', function() {\r\n    // табы\r\n        'use strict';\r\n        let calc = __webpack_require__(/*! ./parts/calc */ \"./src/js/parts/calc.js\"),\r\n            slider = __webpack_require__(/*! ./parts/slider */ \"./src/js/parts/slider.js\"),\r\n            form = __webpack_require__(/*! ./parts/form */ \"./src/js/parts/form.js\"),\r\n            modal = __webpack_require__(/*! ./parts/modal */ \"./src/js/parts/modal.js\"),\r\n            timer = __webpack_require__(/*! ./parts/timer */ \"./src/js/parts/timer.js\"),\r\n            tabs = __webpack_require__(/*! ./parts/tabs */ \"./src/js/parts/tabs.js\");\r\n\r\n            calc();\r\n            slider();\r\n            form();\r\n            modal();\r\n            timer();\r\n            tabs();\r\n\r\n    });\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function calc() {\r\n    let persons = document.querySelectorAll('.counter-block-input')[0],\r\n        restDays = document.querySelectorAll('.counter-block-input')[1],\r\n        place = document.getElementById('select'),\r\n        totalValue = document.getElementById('total'),\r\n        personsSum = 0,\r\n        daysSum = 0,\r\n        total = 0;\r\n\r\n\r\n\r\n    function countSum() {\r\n        totalValue.innerHTML = 0;\r\n        persons.addEventListener('change', function () {\r\n            personsSum = +this.value;\r\n            total = (daysSum + personsSum) * 4000;\r\n\r\n            if (restDays.value == '') {\r\n                totalValue.innerHTML = 0;\r\n            } else {\r\n                totalValue.innerHTML = total;\r\n            }\r\n            if (daysSum == 0 || personsSum == 0) {\r\n                totalValue.innerHTML = 0;\r\n            }\r\n        });\r\n\r\n        restDays.addEventListener('change', function () {\r\n            daysSum = +this.value;\r\n            total = (daysSum + personsSum) * 4000;\r\n\r\n            if (persons.value == '' || restDays.value == 0 || persons.value == 0) {\r\n                totalValue.innerHTML = 0;\r\n            } else {\r\n                totalValue.innerHTML = total;\r\n            }\r\n            if (daysSum == 0 || personsSum == 0) {\r\n                totalValue.innerHTML = 0;\r\n            }\r\n        });\r\n\r\n        place.addEventListener('change', function () {\r\n            if (restDays.value == '' || persons.value == '') {\r\n                totalValue.innerHTML = 0;\r\n            } else {\r\n                let a = total;\r\n                totalValue.innerHTML = a * this.options[this.selectedIndex].value;\r\n            }\r\n        });\r\n    }\r\n    countSum();\r\n}\r\n\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./src/js/parts/calc.js?");

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function form() {\r\n    let message = {\r\n        loading: 'Загрузка',\r\n        sucsess: 'Спасибо, скоро мы с вами свяжемся',\r\n        failure: 'Что-то пошло не так'\r\n    };\r\n    \r\n    let form = document.querySelector('.main-form'),\r\n        input = form.getElementsByTagName('input'),\r\n        contactsForm = document.getElementById('form'),\r\n        contactsInput = contactsForm.getElementsByTagName('input'),\r\n        statusMessage = document.createElement('div');\r\n    \r\n    statusMessage.classList.add('status');\r\n    \r\n    function formSubmit(itform) {\r\n        itform.addEventListener('submit', function (event) {\r\n            event.preventDefault();\r\n            itform.appendChild(statusMessage);\r\n    \r\n            let formData = new FormData(itform);\r\n    \r\n            function postData(data) {\r\n                return new Promise(function (resolve, reject) {\r\n                    let request = new XMLHttpRequest();\r\n                    request.open('POST', 'server.php');\r\n                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n                    // в json формате:   request.setRequestHeader('Content-type', 'application/json; charset=utf-8');\r\n    \r\n                    request.onreadystatechange = function () {\r\n                        if (request.readyState < 4) {\r\n                            resolve();\r\n                        } else if (request.readyState === 4 && request.status == 200) {\r\n                            resolve();\r\n                        } else {\r\n                            reject();\r\n                        }\r\n                    };\r\n    \r\n                    request.send(data);\r\n                    // В json формате: request.send(json);\r\n                });\r\n            }\r\n            // end postData\r\n    \r\n            function clearInput() {\r\n                for (let i = 0; i < input.length; i++) {\r\n                    input[i].value = '';\r\n    \r\n                }\r\n                for (let j = 0; j < contactsInput.length; j++) {\r\n                    contactsInput[j].value = '';\r\n                }\r\n            }\r\n    \r\n            postData(formData)\r\n                .then(() => statusMessage.innerHTML = message.loading)\r\n                .then(() => {\r\n                    //thanksModal.style.display = \"block\";\r\n                    //mainModal.style.display = \"none\";\r\n                    statusMessage.innerHTML = message.sucsess;\r\n                    //statusMessage.innerHTML = \"\";\r\n                })\r\n                .catch(() => statusMessage.innerHTML = message.failure)\r\n                .then(clearInput);\r\n        });\r\n    }\r\n    formSubmit(form);\r\n    formSubmit(contactsForm);\r\n}\r\n\r\nmodule.exports = form;\n\n//# sourceURL=webpack:///./src/js/parts/form.js?");

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\r\n    let more = document.querySelector('.more'),\r\n        descrBtn = document.querySelectorAll('.description-btn'),\r\n        overlay = document.querySelector('.overlay'),\r\n        close = document.querySelector('.popup-close');\r\n\r\n\r\n    [].forEach.call(descrBtn, function (itclass) {\r\n        itclass.addEventListener('click', function () {\r\n            overlay.style.display = \"block\";\r\n            this.classList.add('more-splash');\r\n            document.body.style.overflow = 'hidden';\r\n        });\r\n    });\r\n\r\n    more.addEventListener('click', function () {\r\n        overlay.style.display = \"block\";\r\n        this.classList.add('more-splash');\r\n        document.body.style.overflow = 'hidden';\r\n\r\n    });\r\n\r\n    close.addEventListener('click', () => {\r\n        overlay.style.display = \"none\";\r\n        more.classList.remove('more-splash');\r\n        document.body.style.overflow = '';\r\n    });\r\n}\r\n\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/js/parts/modal.js?");

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function slider() {\r\n    let slideIndex = 1,\r\n        slides = document.querySelectorAll('.slider-item'),\r\n        prev = document.querySelector('.prev'),\r\n        next = document.querySelector('.next'),\r\n        dotsWrap = document.querySelector('.slider-dots'),\r\n        dots = document.querySelectorAll('.dot');\r\n\r\n    showSlides(slideIndex);\r\n    function showSlides(n) {\r\n        if (n > slides.length) {\r\n            slideIndex = 1;\r\n        }\r\n        if (n < 1) {\r\n            slideIndex = slides.length;\r\n        }\r\n\r\n        slides.forEach((item) => item.style.display = \"none\");\r\n        dots.forEach((item) => item.classList.remove('dot-active'));\r\n        slides[slideIndex - 1].style.display = 'block';\r\n        dots[slideIndex - 1].classList.add('dot-active');\r\n    }\r\n\r\n    function plusSlides(n) {\r\n       showSlides(slideIndex += n);\r\n    }\r\n    function currentSlide(n) {\r\n        showSlides(slideIndex = n);\r\n    }\r\n    prev.addEventListener('click', function() {\r\n        plusSlides(-1);\r\n    });\r\n    next.addEventListener('click', function() {\r\n        plusSlides(1);\r\n    });\r\n\r\n    dotsWrap.addEventListener('click', function(event) {\r\n        for (let i = 0; i < dots.length + 1; i++) {\r\n            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {\r\n                currentSlide(i);\r\n            }\r\n        }\r\n    });\r\n}\r\n\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./src/js/parts/slider.js?");

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function tabs() {\r\n    let tab = document.querySelectorAll('.info-header-tab'),\r\n        info = document.querySelector('.info-header'),\r\n        tabContent = document.querySelectorAll('.info-tabcontent');\r\n\r\n    function hideTabContent(a) {\r\n        for (let i = a; i < tabContent.length; i++) {\r\n            tabContent[i].classList.remove('show');\r\n            tabContent[i].classList.add('hide');\r\n        }\r\n    }\r\n    hideTabContent(1);\r\n\r\n    function showTabContent(b) {\r\n        if (tabContent[b].classList.contains('hide')) {\r\n            tabContent[b].classList.remove('hide');\r\n            tabContent[b].classList.add('show');\r\n        }\r\n    }\r\n\r\n    info.addEventListener('click', (event) => {\r\n        let target = event.target;\r\n        if (target && target.classList.contains('info-header-tab')) {\r\n            for (let i = 0; i < tab.length; i++) {\r\n                if (target == tab[i]) {\r\n                    hideTabContent(0);\r\n                    showTabContent(i);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n\r\n    });\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./src/js/parts/tabs.js?");

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function timer() {\r\n    let deadline = '2020-05-07';\r\n\r\n    function getTimeRemaining(endtime) {\r\n        let t = Date.parse(endtime) - Date.parse(new Date()),\r\n            seconds = Math.floor((t / 1000) % 60),\r\n            minutes = Math.floor((t / (1000 * 60)) % 60),\r\n            hours = Math.floor((t / (1000 * 60 * 60))) - 3;\r\n\r\n        return {\r\n            \"total\": t,\r\n            \"hours\": hours,\r\n            \"minutes\": minutes,\r\n            \"seconds\": seconds\r\n        };\r\n    }\r\n\r\n    function setClock(id, endtime) {\r\n        let timer = document.getElementById(id),\r\n            hours = timer.querySelector('.hours'),\r\n            minutes = timer.querySelector('.minutes'),\r\n            seconds = timer.querySelector('.seconds'),\r\n            timeInterval = setInterval(updateClock, 1000);\r\n\r\n        function updateClock() {\r\n            let t = getTimeRemaining(endtime);\r\n\r\n            function addZero(num) {\r\n                if (num <= 9) {\r\n                    return '0' + num;\r\n                } else {\r\n                    return num;\r\n                }\r\n            }\r\n\r\n            hours.textContent = addZero(t.hours);\r\n            minutes.textContent = addZero(t.minutes);\r\n            seconds.textContent = addZero(t.seconds);\r\n\r\n            if (t.total <= 0) {\r\n                clearInterval(timeInterval);\r\n                hours.textContent = '00';\r\n                minutes.textContent = '00';\r\n                seconds.textContent = '00';\r\n            }\r\n        }\r\n    }\r\n    setClock('timer', deadline);\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./src/js/parts/timer.js?");

/***/ })

/******/ });