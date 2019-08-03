webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/layout/app-bar/menu/index.js":
/*!*************************************************!*\
  !*** ./components/layout/app-bar/menu/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile */ "./components/layout/app-bar/menu/mobile.js");
/* harmony import */ var _desktop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop */ "./components/layout/app-bar/menu/desktop.js");
var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\layout\\app-bar\\menu\\index.js";




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "menu__Wrapper",
  componentId: "lwc5ib-0"
})(["background-color:", ";width:1000%;color:", ";"], function (props) {
  return props.theme.colors.orange;
}, function (props) {
  return props.theme.colors.white;
});
var menu = [{
  title: "Визы",
  link: "#continents"
}, {
  title: "Туры",
  link: "#tours"
}, {
  title: "Авиабилеты",
  link: "#continents"
}, {
  title: "Контакты",
  link: "#footer"
}];

var Menu = function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_desktop__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mobile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=_app.js.739c2a7fc527edb95caf.hot-update.js.map