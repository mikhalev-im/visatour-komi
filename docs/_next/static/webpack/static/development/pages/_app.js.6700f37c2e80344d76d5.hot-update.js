webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./effects/useComponentVisible.js":
/*!****************************************!*\
  !*** ./effects/useComponentVisible.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var useComponentVisible = function useComponentVisible(initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialValue),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var handleClickOutside = function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof document === "undefined") return;
    document.addEventListener("click", handleClickOutside, true);
    return function () {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return {
    ref: ref,
    isVisible: isVisible,
    setIsVisible: setIsVisible
  };
};

/* harmony default export */ __webpack_exports__["default"] = (useComponentVisible);

/***/ })

})
//# sourceMappingURL=_app.js.6700f37c2e80344d76d5.hot-update.js.map