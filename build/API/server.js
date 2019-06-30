"use strict";

require("@babel/polyfill");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _open = _interopRequireDefault(require("open"));

var _cors = _interopRequireDefault(require("cors"));

var _api = _interopRequireDefault(require("./routes/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var NODE_ENV = process.env.NODE_ENV || "DEVELOPMENT";
var app = (0, _express["default"])();
app.set("port", process.env.PORT || 3001);
app.use((0, _cors["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use("/api", _api["default"]);
app.use("/", _express["default"]["static"](_path["default"].join(__dirname, "../src")));
app.get("/*", function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, "../src", "index.html"));
});
app.listen(app.get("port"),
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Magic happens on port: ", NODE_ENV);
            console.log("We are on: ", NODE_ENV); // NODE_ENV === 'DEVELOPMENT' && await open("http://localhost:" + app.get("port") + "/api");
            // await open("http://localhost:" + app.get("port"));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
//# sourceMappingURL=server.js.map