webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/layout/app-bar/menu/mobile.js":
/*!**************************************************!*\
  !*** ./components/layout/app-bar/menu/mobile.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./components/layout/app-bar/menu/shared.js");
/* harmony import */ var _effects_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../effects/useComponentVisible */ "./effects/useComponentVisible.js");

var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\layout\\app-bar\\menu\\mobile.js";





var ListMobile = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_shared__WEBPACK_IMPORTED_MODULE_4__["List"]).withConfig({
  displayName: "mobile__ListMobile",
  componentId: "sc-1ogul98-0"
})(["justify-content:space-between;@media (min-width:", "){display:none;}@media (max-width:", "){width:564px;}@media (max-width:", "){width:250px;}@media (max-width:", "){width:185px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.theme.breakpoints.xs;
});
var MenuBtn = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "mobile__MenuBtn",
  componentId: "sc-1ogul98-1"
})(["line-height:48px;font-size:20px;"]);
var HiddenMenu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "mobile__HiddenMenu",
  componentId: "sc-1ogul98-2"
})(["position:fixed;width:200px;top:0;right:0;height:100%;transition:0.5s;padding-top:10px;background-color:", ";box-shadow:-5px 0 5px rgba(69,90,100,0.5);z-index:10;a{color:", ";text-decoration:none;}"], function (props) {
  return props.theme.colors.orange;
}, function (props) {
  return props.theme.colors.white;
});
var HiddenItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "mobile__HiddenItem",
  componentId: "sc-1ogul98-3"
})(["padding-left:10px;"]);

var MobileMenu = function MobileMenu(_ref) {
  var items = _ref.items;

  var _useComponentVisible = Object(_effects_useComponentVisible__WEBPACK_IMPORTED_MODULE_5__["default"])(false),
      ref = _useComponentVisible.ref,
      isVisible = _useComponentVisible.isVisible,
      setIsVisible = _useComponentVisible.setIsVisible;

  var _items = Object(_babel_runtime_corejs2_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(items),
      first = _items[0],
      rest = _items.slice(1);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListMobile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_4__["Item"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: first.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, first.title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuBtn, {
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaBars"], {
    onClick: function onClick() {
      return setIsVisible(function (value) {
        return !value;
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenMenu, {
    style: {
      width: isVisible ? "200px" : "0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, rest.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HiddenItem, {
      key: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: item.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, item.title));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ })

})
//# sourceMappingURL=_app.js.a9389c392b17599c653a.hot-update.js.map