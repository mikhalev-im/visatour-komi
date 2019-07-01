webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./shared/api.js":
/*!***********************!*\
  !*** ./shared/api.js ***!
  \***********************/
/*! exports provided: sendMail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMail", function() { return sendMail; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unfetch */ "./node_modules/unfetch/dist/unfetch.mjs");



var sendMail =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(phone, name) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(unfetch__WEBPACK_IMPORTED_MODULE_2__["default"])("https://eu-gb.functions.cloud.ibm.com/api/v1/web/c1one@yandex.ru_dev/visatour-komi/mail.json?phone=".concat(phone, "&name=").concat(name));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function sendMail(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=_app.js.8bc2c41db64a0c8ccdf1.hot-update.js.map