webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/layout/app-bar/info-bar.js":
/*!***********************************************!*\
  !*** ./components/layout/app-bar/info-bar.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal */ "./components/layout/modal/index.js");
/* harmony import */ var react_icons_fa___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa/ */ "./node_modules/react-icons/fa/index.esm.js");

var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\layout\\app-bar\\info-bar.js";




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "info-bar__Wrapper",
  componentId: "eka3r5-0"
})(["display:flex;justify-content:space-between;"]);
var Address = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "info-bar__Address",
  componentId: "eka3r5-1"
})(["font-size:15px;& p{margin:0;line-height:24px;}@media (min-width:", "){display:flex;& p{margin-left:30px;line-height:48px;}}@media (max-width:", "){display:none;}"], function (props) {
  return props.theme.breakpoints.lg;
}, function (props) {
  return props.theme.breakpoints.md;
});
var WorkingHours = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "info-bar__WorkingHours",
  componentId: "eka3r5-2"
})(["color:#1e8edd;"]);
var Contacts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "info-bar__Contacts",
  componentId: "eka3r5-3"
})(["font-size:25px;height:48px;& a{color:", ";text-decoration:none;line-height:48px;}& svg{font-size:28px;vertical-align:text-bottom;color:", ";}& b{color:", ";}@media (max-width:", "){font-size:18px;& svg{font-size:20px;}}"], function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.blue;
}, function (props) {
  return props.theme.colors.blue;
}, function (props) {
  return props.theme.breakpoints.xs;
});
var Callback = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "info-bar__Callback",
  componentId: "eka3r5-4"
})(["height:48px;font-size:17px;color:", ";cursor:pointer;& a{line-height:48px;}& svg{font-size:22px;vertical-align:text-bottom;}& span{border-bottom:1px solid;}@media (max-width:", "){display:none;}"], function (props) {
  return props.theme.colors.blue;
}, function (props) {
  return props.theme.breakpoints.sm;
});

var InfoBar = function InfoBar() {
  var _useModalContext = Object(_modal__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])(),
      _useModalContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModalContext, 2),
      _ = _useModalContext2[0],
      setModalState = _useModalContext2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Address, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u0433. \u0421\u044B\u043A\u0442\u044B\u0432\u043A\u0430\u0440, \u0443\u043B. \u041E\u0440\u0434\u0436\u043E\u043D\u0438\u043A\u0438\u0434\u0437\u0435 16"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WorkingHours, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\u041F\u043D - \u041F\u0442: 10:00 - 18:00, \u0421\u0431: 11:00 - 15:00")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Contacts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "tel:+78212239305",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa___WEBPACK_IMPORTED_MODULE_4__["FaPhoneVolume"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), " +7 (821) ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "223-93-05"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Callback, {
    onClick: function onClick() {
      return setModalState("FORM");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa___WEBPACK_IMPORTED_MODULE_4__["FaPhoneSquare"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"))));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoBar);

/***/ })

})
//# sourceMappingURL=_app.js.8b7bd5e5ea69340a1516.hot-update.js.map