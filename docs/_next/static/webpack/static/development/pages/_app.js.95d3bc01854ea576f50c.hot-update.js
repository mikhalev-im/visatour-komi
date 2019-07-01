webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/layout/app-bar/menu/desktop.js":
/*!***************************************************!*\
  !*** ./components/layout/app-bar/menu/desktop.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./components/layout/app-bar/menu/shared.js");
var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\layout\\app-bar\\menu\\desktop.js";



var ListDesktop = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_shared__WEBPACK_IMPORTED_MODULE_2__["List"]).withConfig({
  displayName: "desktop__ListDesktop",
  componentId: "sc-1jp4ow6-0"
})(["@media (max-width:", "){display:none;}"], function (props) {
  return props.theme.breakpoints.md;
});

var DesktopMenu = function DesktopMenu(_ref) {
  var items = _ref.items;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListDesktop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_2__["Item"], {
      key: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, item.title));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DesktopMenu);

/***/ })

})
//# sourceMappingURL=_app.js.95d3bc01854ea576f50c.hot-update.js.map