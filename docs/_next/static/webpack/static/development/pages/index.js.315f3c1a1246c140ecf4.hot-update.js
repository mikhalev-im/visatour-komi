webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/continents.js":
/*!**********************************!*\
  !*** ./components/continents.js ***!
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
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./components/styled.js");

var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\continents.js";





var Section = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled__WEBPACK_IMPORTED_MODULE_5__["Section"]).withConfig({
  displayName: "continents__Section",
  componentId: "mu4rdf-0"
})(["background-color:", ";text-align:center;"], function (props) {
  return props.theme.colors.grey;
});
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled__WEBPACK_IMPORTED_MODULE_5__["Title"]).withConfig({
  displayName: "continents__Title",
  componentId: "mu4rdf-1"
})(["margin-top:0;font-size:50px;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "continents__Wrapper",
  componentId: "mu4rdf-2"
})(["display:flex;justify-content:center;flex-wrap:wrap;"]);
var Continent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "continents__Continent",
  componentId: "mu4rdf-3"
})(["display:block;cursor:pointer;&:hover{p{font-weight:bold;}div{filter:drop-shadow(0 5px 2px #555);}}"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "continents__Img",
  componentId: "mu4rdf-4"
})(["margin:0 auto;background-image:url(", "/static/images/continents.png);background-repeat:no-repeat;background-size:auto;transition:all 0.3s;"], Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetsPrefix"])());
var EuropeImg = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Img).withConfig({
  displayName: "continents__EuropeImg",
  componentId: "mu4rdf-5"
})(["width:250px;height:250px;background-position:0px 0px;"]);
var AsiaImg = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Img).withConfig({
  displayName: "continents__AsiaImg",
  componentId: "mu4rdf-6"
})(["width:300px;height:250px;margin-left:20px;background-position:0px 0px;"]);
var AustraliaImg = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(Img).withConfig({
  displayName: "continents__AustraliaImg",
  componentId: "mu4rdf-7"
})(["width:280px;height:290px;background-image:url(", "/static/images/australia-ready.png);"], Object(_shared_utils__WEBPACK_IMPORTED_MODULE_4__["getAssetsPrefix"])());

var VisaMap = function VisaMap() {
  var _useModalContext = Object(_layout_modal__WEBPACK_IMPORTED_MODULE_3__["useModalContext"])(),
      _useModalContext2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useModalContext, 2),
      _ = _useModalContext2[0],
      setModalState = _useModalContext2[1];

  var handleClick = function handleClick() {
    return setModalState("FORM");
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
    height: "auto",
    id: "continents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\u041A\u0443\u0434\u0430 \u043F\u043E\u0435\u0434\u0435\u043C?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Continent, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\u0415\u0432\u0440\u043E\u043F\u0430"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(EuropeImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Continent, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "\u0410\u0437\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AsiaImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Continent, {
    onClick: handleClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\u0410\u0432\u0441\u0442\u0440\u0430\u043B\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AustraliaImg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0438\u043D\u0435\u0442 \u0434\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u043C\u0440\u0430\u0446\u0438\u0438")));
};

/* harmony default export */ __webpack_exports__["default"] = (VisaMap);

/***/ })

})
//# sourceMappingURL=index.js.315f3c1a1246c140ecf4.hot-update.js.map