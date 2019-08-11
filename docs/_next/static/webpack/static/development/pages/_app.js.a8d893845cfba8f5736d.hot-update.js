webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-normalize */ "./node_modules/styled-normalize/dist/index.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/utils */ "./shared/utils.js");
/* harmony import */ var _shared_gtag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/gtag */ "./shared/gtag.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");







var _jsxFileName = "F:\\web\\JS\\visa-sykt\\pages\\_app.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  ", "\n\n  * {\n    font-family: 'PT Sans', sans-serif;\n  }\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}










var theme = {
  colors: {
    white: "#fff",
    grey: "#fafafa",
    darkGrey: "#a9a9a9",
    black: "#000",
    blue: "#1e8edd",
    orange: "#ff9818",
    darkOrange: "#ff8e00"
  },
  breakpoints: {
    lg: "1229px",
    md: "939px",
    sm: "723px",
    xs: "400px"
  }
};
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_11__["createGlobalStyle"])(_templateObject(), styled_normalize__WEBPACK_IMPORTED_MODULE_12__["normalize"]);
next_router__WEBPACK_IMPORTED_MODULE_9___default.a.events.on("routeChangeComplete", function (url) {
  return Object(_shared_gtag__WEBPACK_IMPORTED_MODULE_14__["pageview"])(url);
});

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u0412\u0438\u0437\u043E\u0432\u044B\u0439 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0438\u0437\u0443 \u0448\u0435\u043D\u0433\u0435\u043D \u0438 \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u044B. \u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0443\u044E \u0431\u0438\u043E\u043C\u0435\u0442\u0440\u0438\u044E \u0438\u043B\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0431\u0435\u0437 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F. \u041C\u0438\u043D\u0438\u043C\u0443\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432! \u0422\u0443\u0440\u044B \u0438 \u0430\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442\u044B. \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435. \u0424\u043E\u0442\u043E \u043D\u0430 \u0432\u0438\u0437\u0443 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "keywords",
        content: "\u0432\u0438\u0437\u044B, \u0442\u0443\u0440\u044B, \u0430\u0432\u0442\u043E\u0431\u0443\u0441\u043D\u044B\u0435 \u0442\u0443\u0440\u044B, \u0448\u0435\u043D\u0433\u0435\u043D\u0441\u043A\u0430\u044F \u0432\u0438\u0437\u0430 \u0432 \u0441\u044B\u043A\u0442\u044B\u0432\u043A\u0430\u0440\u0435, \u0432\u0438\u0437\u043E\u0432\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 \u0441\u044B\u043A\u0442\u044B\u0432\u043A\u0430\u0440, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0438\u0437\u0443, \u0432\u0438\u0437\u044B \u0431\u044B\u0441\u0442\u0440\u043E",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_13__["getAssetsPrefix"])(), "/static/images/favicon.ico"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=".concat(_shared_gtag__WEBPACK_IMPORTED_MODULE_14__["GA_TRACKING_ID"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(_shared_gtag__WEBPACK_IMPORTED_MODULE_14__["GA_TRACKING_ID"], "');\n          ")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        async: true,
        type: "text/javascript",
        src: "https://vk.com/js/api/openapi.js?162",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "vk_community_messages",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.a8d893845cfba8f5736d.hot-update.js.map