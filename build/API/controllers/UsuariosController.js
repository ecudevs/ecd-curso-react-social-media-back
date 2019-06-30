"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firestore = require("../firebase/firestore");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuarios =
/*#__PURE__*/
function () {
  function Usuarios() {
    _classCallCheck(this, Usuarios);
  }

  _createClass(Usuarios, [{
    key: "getUsuarios",
    // METODO DE LA CLASE USUARIOS
    value: function () {
      var _getUsuarios = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(res) {
        var registros, consulta;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  registros = [];
                  consulta = _firestore.firestoreRef.collection("usuarios").orderBy('fechaCreacion', 'desc');
                  consulta.get().then(function (respuesta) {
                    registros = respuesta.docs;
                    registros = registros.map(function (item) {
                      return Object.assign({
                        _id: item.id
                      }, item.data());
                    });
                    res.status(200).send({
                      registros: registros
                    });
                  });
                } catch (err) {
                  console.log(error);
                  res.status(500).send({
                    success: false,
                    error: error,
                    message: "Ocurrió algo!"
                  });
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getUsuarios(_x) {
        return _getUsuarios.apply(this, arguments);
      }

      return getUsuarios;
    }()
  }]);

  return Usuarios;
}();

var _default = new Usuarios();

exports["default"] = _default;
//# sourceMappingURL=UsuariosController.js.map