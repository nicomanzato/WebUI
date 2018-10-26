"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actor = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};

exports.Actor = Actor;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventEmitter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }

      this.events[eventName].push(callback);
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      var event = this.events[eventName];

      if (event) {
        event.forEach(function (fn) {
          fn.call(null, data);
        });
      }
    }
  }, {
    key: "off",
    value: function off(eventName) {
      this.events[eventName] = [];
    }
  }]);

  return EventEmitter;
}();

exports.EventEmitter = EventEmitter;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log("Logger: " + info);
    }
  }]);

  return Logger;
}();

exports.Logger = Logger;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = void 0;

var _eventEmitter = require("./eventEmitter.js");

var _socialMixin = require("./socialMixin.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Movie =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    var _this;

    _classCallCheck(this, Movie);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Movie).call(this));
    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    Object.assign(Movie.prototype, _socialMixin.socialMixin);
    return _this;
  }

  _createClass(Movie, [{
    key: "play",
    value: function play() {
      this.emit("play", this);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.emit("pause", this);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.emit("resume", this);
    }
  }, {
    key: "addCast",
    value: function addCast() {
      for (var i = 0; i < arguments.length; i++) {
        this.cast.push(i < 0 || arguments.length <= i ? undefined : arguments[i]);
      }
    }
  }]);

  return Movie;
}(_eventEmitter.EventEmitter);

exports.Movie = Movie;
"use strict";

var _movie = require("./movie.js");

var _actor = require("./actor.js");

var _logger = require("./logger.js");

window.addEventListener('load', function () {
  var movie = new _movie.Movie("Pokemon The Movie", 1993, 1.5);
  var actor = new _actor.Actor("Pikachu", 5);
  var logger = new _logger.Logger();
  movie.on("play", function () {
    return logger.log("The movie is playing");
  });
  movie.on("play", function () {
    return logger.log("Now you can have multiple callbacks to a single event");
  });
  movie.on("pause", function () {
    return logger.log("The movie is paused");
  });
  movie.on("resume", function () {
    return logger.log("The movie resumed playing");
  });
  movie.play();
  movie.pause();
  movie.resume();
  movie.addCast(actor);
  movie.like("Nic");
  movie.share("Nic");
}, false);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socialMixin = void 0;
var socialMixin = {
  share: function share(friendName) {
    console.log(friendName + " shared " + this.title);
  },
  like: function like(friendName) {
    console.log(friendName + " liked " + this.title);
  }
};
exports.socialMixin = socialMixin;
