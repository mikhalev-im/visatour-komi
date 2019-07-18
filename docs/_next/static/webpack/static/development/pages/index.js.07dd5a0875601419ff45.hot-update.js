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






var dates = [{
  countries: ["Финляндия", "Чехия", "Литва", "Словения", "Дания", "Исландия"],
  dates: ["22 июля", "15 августа"]
}, {
  countries: ["Испания"],
  dates: ["29 июля"]
}, {
  countries: ["Латвия", "Венгрия"],
  dates: ["в любой будний день!"]
}];
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
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "biometrics__ListItem",
  componentId: "sc-1qjc3xo-6"
})(["margin-bottom:5px;"]);

var Biometrics = function Biometrics() {
  var _useModalContext = Object(_layout_modal__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])(),
      _useModalContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModalContext, 2),
      _ = _useModalContext2[0],
      setModalState = _useModalContext2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
    id: "biometrics",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FingerPrintImg, {
    src: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetsPrefix"])(), "/static/images/fingerprint.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WaveStyled, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "\u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0431\u0438\u043E\u043C\u0435\u0442\u0440\u0438\u044F \u0432 \u0421\u044B\u043A\u0442\u044B\u0432\u043A\u0430\u0440\u0435"), dates.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: item.countries.join(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, item.countries.join(", "), ":", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), " ", item.dates.join(", "));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__["PulseBtn"], {
    onClick: function onClick() {
      return setModalState("FORM");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Biometrics);

/***/ })

})
//# sourceMappingURL=index.js.07dd5a0875601419ff45.hot-update.js.map