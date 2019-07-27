webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/cover.js":
/*!*****************************!*\
  !*** ./components/cover.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utils */ "./shared/utils.js");
/* harmony import */ var _layout_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/modal */ "./components/layout/modal/index.js");
/* harmony import */ var _shared_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/api */ "./shared/api.js");
/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styled */ "./components/styled.js");

var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\cover.js";






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "cover__Wrapper",
  componentId: "sc-7fa62t-0"
})(["height:650px;padding-top:150px;background:url(", "/static/images/cover.png) 80% 50px / contain no-repeat,linear-gradient(to right,#64acb7,#68c6e0);@media (max-width:", "){background:url(", "/static/images/cover.png) 150% 50px / contain no-repeat,linear-gradient(to right,#64acb7,#68c6e0);}@media (max-width:", "){background:linear-gradient(to right,#64acb7,#68c6e0);height:auto;padding:50px 0;}"], Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getAssetsPrefix"])(), function (props) {
  return props.theme.breakpoints.md;
}, Object(_shared_utils__WEBPACK_IMPORTED_MODULE_3__["getAssetsPrefix"])(), function (props) {
  return props.theme.breakpoints.sm;
});
var Container = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_styled__WEBPACK_IMPORTED_MODULE_6__["Container"]).withConfig({
  displayName: "cover__Container",
  componentId: "sc-7fa62t-1"
})(["@media (max-width:", "){padding:0 25px;}@media (max-width:", "){text-align:center;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_components_styled__WEBPACK_IMPORTED_MODULE_6__["Title"]).withConfig({
  displayName: "cover__Title",
  componentId: "sc-7fa62t-2"
})(["color:", ";@media (min-width:", "){text-align:left;}"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "cover__Input",
  componentId: "sc-7fa62t-3"
})(["padding:25px 10px;border-radius:40px;border:1px solid ", ";outline:none;text-align:center;font-size:20px;width:285px;"], function (props) {
  return props.theme.colors.orange;
});

var Cover = function Cover() {
  var _useModalContext = Object(_layout_modal__WEBPACK_IMPORTED_MODULE_4__["useModalContext"])(),
      _useModalContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModalContext, 2),
      _ = _useModalContext2[0],
      setModalState = _useModalContext2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    if (!ref.current.value) {
      ref.current.focus();
      return;
    }

    Object(_shared_api__WEBPACK_IMPORTED_MODULE_5__["sendMail"])(ref.current.value);
    setModalState("THANKS");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    size: "30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u0412\u0438\u0437\u044B \u0438 \u0442\u0443\u0440\u044B \u0432 \u043B\u044E\u0431\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0443!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    autoComplete: "on",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Input, {
    ref: ref,
    type: "tel",
    name: "tel",
    required: true,
    autoComplete: "tel",
    placeholder: "\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled__WEBPACK_IMPORTED_MODULE_6__["PulseBtn"], {
    onClick: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ })

})
//# sourceMappingURL=index.js.8c431bc566a9d9052eac.hot-update.js.map