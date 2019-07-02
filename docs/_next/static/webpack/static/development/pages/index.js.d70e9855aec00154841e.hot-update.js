webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/services.js":
/*!********************************!*\
  !*** ./components/services.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils */ "./shared/utils.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/styled.js");
var _jsxFileName = "F:\\web\\JS\\visa-sykt\\components\\services.js";




var items = [{
  img: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getAssetsPrefix"])(), "/static/images/passport.jpg"),
  caption: "Оформление виз"
}, {
  img: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getAssetsPrefix"])(), "/static/images/bus-tour.jpg"),
  caption: "Оформление туров"
}, {
  img: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getAssetsPrefix"])(), "/static/images/aircraft.jpg"),
  caption: "Авиабилеты"
}, {
  img: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getAssetsPrefix"])(), "/static/images/hotel.jpg"),
  caption: "Бронирование отелей"
}, {
  img: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getAssetsPrefix"])(), "/static/images/insurance.jpg"),
  caption: "Страхование путешествинников"
}];
var Title = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled__WEBPACK_IMPORTED_MODULE_3__["Title"]).withConfig({
  displayName: "services__Title",
  componentId: "ddmf7w-0"
})(["margin-top:0;margin-bottom:60px;"]);
var List = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "services__List",
  componentId: "ddmf7w-1"
})(["display:flex;padding:0;margin:0;list-style:none;text-align:center;justify-content:space-around;flex-wrap:wrap;"]);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li.withConfig({
  displayName: "services__Item",
  componentId: "ddmf7w-2"
})(["max-width:150px;transition:all 0.3s;&:hover{transform:translateY(-10px);}"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "services__Img",
  componentId: "ddmf7w-3"
})(["margin:0 auto;width:150px;height:150px;border-radius:100px;background-size:auto;background-repeat:no-repeat;background-position:0 0;background-image:url(", "/static/images/services.png);"], Object(_shared_utils__WEBPACK_IMPORTED_MODULE_2__["getAssetsPrefix"])());

var Services = function Services() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    height: "auto",
    id: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, {
      key: item.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
      img: item.img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, item.caption));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=index.js.d70e9855aec00154841e.hot-update.js.map