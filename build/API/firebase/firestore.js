"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storageRef = exports.firestoreRef = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

require("firebase/storage");

var _firestoreCredentials = _interopRequireDefault(require("./firestoreCredentials"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

try {
  _firebase["default"].initializeApp(_firestoreCredentials["default"]);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('e', err.stack);
  }
}

var firestoreRef = _firebase["default"].firestore();

exports.firestoreRef = firestoreRef;

var storageRef = _firebase["default"].storage();

exports.storageRef = storageRef;
//# sourceMappingURL=firestore.js.map