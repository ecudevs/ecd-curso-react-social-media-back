"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _UsuariosController = _interopRequireDefault(require("../controllers/UsuariosController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = new _express.Router();
router.get("/", function (req, res) {
  res.send("Go on Little Batmanx!");
});
router.get("/usuarios", function (req, res) {
  _UsuariosController["default"].getUsuarios(res);
}); // SI TUVIERAMOS QUE MANDAR PARAMETROS
// router.get("/lumina/updates", (req, res) => {
//     UsuariosController.getUsuarios(req, res)
// });

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=api.js.map