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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Avatar = __webpack_require__(1);

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loaded = false;
var students = [];

function winner(position) {
  var fighter = document.getElementById('fighter_' + position);
  var data = fighter.dataset;
  var label = document.getElementById('winner');
  label.innerHTML = "Winner: " + data.name;
  students.push(data);
  if (students.length !== 1) {
    var fighting = selectStudents();
    placeFighters(fighting);
  } else {
    var avatar = (0, _Avatar2.default)(position, data);
    var div = document.createElement('div');
    div.className = 'winner';
    div.innerHTML = avatar;
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var fightZone = document.getElementById('fight_zone');
    left.remove();
    right.remove();
    fightZone.append(div);
  }
}

function renderStudents() {
  var list = document.getElementById('students');
  list.innerHTML = null;
  students.forEach(function (user) {
    var li = document.createElement('li');
    li.innerText = user.name;
    list.append(li);
  });
}

function sample() {
  var index = Math.floor(Math.random() * students.length);
  var student = students[index];
  students.splice(index, 1);
  return student;
}

function selectStudents() {
  var left = sample();
  var right = sample();
  renderStudents();
  return [left, right];
}

function placeFighters(fighting) {
  var left = (0, _Avatar2.default)('left', fighting[0]);
  var right = (0, _Avatar2.default)('right', fighting[1]);
  var leftBox = document.getElementById('left');
  var rightBox = document.getElementById('right');
  leftBox.innerHTML = left;
  rightBox.innerHTML = right;
}

function startFight() {
  loaded = true;
  var left = document.getElementById('left');
  var right = document.getElementById('right');
  left.className = 'left fight-box';
  right.className = 'left fight-box';
  var fighting = selectStudents();
  placeFighters(fighting);
}

function pullStudents() {
  if (!loaded) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        students = JSON.parse(xhr.responseText);
        var list = document.getElementById('students');
        students.forEach(function (user) {
          var li = document.createElement('li');
          li.innerText = user.name;
          list.append(li);
        });
        document.getElementById('load_students').remove();
        startFight();
      }
    };
    xhr.open('GET', 'https://canvas-students.herokuapp.com/api/student_list/50', true);
    xhr.send(null);
  }
}

var button = document.getElementById('loading_zone');
var leftFighter = document.getElementById('left');
var rightFighter = document.getElementById('right');
button.addEventListener('click', pullStudents);
leftFighter.addEventListener('click', function () {
  winner('left');
});
rightFighter.addEventListener('click', function () {
  winner('right');
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Avatar = function Avatar(position, _ref) {
  var name = _ref.name,
      avatar = _ref.avatar;
  return "<h5\n     id='fighter_" + position + "'\n     data-name='" + name + "'\n     data-avatar='" + avatar + "'\n     class=\"center fighter\"\n   >\n     " + name + "\n   </h5>\n   <img\n     class=\"avatar\"\n     src='" + avatar + "'\n   />";
};

exports.default = Avatar;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map