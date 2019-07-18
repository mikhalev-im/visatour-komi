webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/biometrics.js":
/*!**********************************!*\
  !*** ./components/biometrics.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _layout_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/modal */ "./components/layout/modal/index.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils */ "./shared/utils.js");
/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wave */ "./components/wave.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./components/styled.js");

var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\biometrics.js";






var Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "biometrics__Section",
  componentId: "sc-1qjc3xo-0"
})(["height:500px;display:flex;justify-content:flex-end;background:linear-gradient(to left,#8f94fb,#93cede);@media (max-width:", "){text-align:center;color:white;height:auto;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TextSection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "biometrics__TextSection",
  componentId: "sc-1qjc3xo-1"
})(["width:45%;background-color:", ";height:100%;position:relative;z-index:5;padding:50px 0;@media (max-width:", "){width:100%;background:linear-gradient(to left,#8f94fb,#93cede);}"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var WaveStyled = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_wave__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "biometrics__WaveStyled",
  componentId: "sc-1qjc3xo-2"
})(["position:absolute;right:95%;top:0;width:230px;z-index:5;@media (max-width:", "){display:none;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "biometrics__TextWrapper",
  componentId: "sc-1qjc3xo-3"
})(["position:relative;z-index:10;ul{margin-bottom:30px;}"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "biometrics__Title",
  componentId: "sc-1qjc3xo-4"
})(["font-size:40px;max-width:400px;@media (max-width:", "){margin:0 auto;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var FingerPrintImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "biometrics__FingerPrintImg",
  componentId: "sc-1qjc3xo-5"
})(["display:block;position:absolute;right:125%;top:75px;"]);

var Biometrics = function Biometrics() {
  var _useModalContext = Object(_layout_modal__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])(),
      _useModalContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModalContext, 2),
      _ = _useModalContext2[0],
      setModalState = _useModalContext2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
    id: "biometrics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FingerPrintImg, {
    src: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetsPrefix"])(), "/static/images/fingerprint.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WaveStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0431\u0438\u043E\u043C\u0435\u0442\u0440\u0438\u044F \u0432 \u0421\u044B\u043A\u0442\u044B\u0432\u043A\u0430\u0440\u0435"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F, \u0427\u0435\u0445\u0438\u044F, \u041B\u0438\u0442\u0432\u0430, \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F, \u0414\u0430\u043D\u0438\u044F, \u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F: 22 \u0438\u044E\u043B\u044F, 15 \u0430\u0432\u0433\u0443\u0441\u0442\u0430"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u0418\u0441\u043F\u0430\u043D\u0438\u044F: 29 \u0438\u044E\u043B\u044F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "\u041B\u0430\u0442\u0432\u0438\u044F, \u0412\u0435\u043D\u0433\u0440\u0438\u044F: \u0432 \u043B\u044E\u0431\u043E\u0439 \u0431\u0443\u0434\u043D\u0438\u0439 \u0434\u0435\u043D\u044C!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\u0424\u0438\u043D\u043B\u044F\u043D\u0434\u0438\u044F, \u0427\u0435\u0445\u0438\u044F, \u041B\u0438\u0442\u0432\u0430, \u0421\u043B\u043E\u0432\u0435\u043D\u0438\u044F, \u0414\u0430\u043D\u0438\u044F, \u0418\u0441\u043B\u0430\u043D\u0434\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "22 \u0438\u044E\u043B\u044F, 15 \u0430\u0432\u0433\u0443\u0441\u0442\u0430"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__["PulseBtn"], {
    onClick: function onClick() {
      return setModalState("FORM");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Biometrics);

/***/ })

})
//# sourceMappingURL=index.js.c84834bbe5674476d80c.hot-update.js.map