webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./shared/gtag.js":
/*!************************!*\
  !*** ./shared/gtag.js ***!
  \************************/
/*! exports provided: GA_TRACKING_ID, pageview, event */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GA_TRACKING_ID", function() { return GA_TRACKING_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageview", function() { return pageview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return event; });
var GA_TRACKING_ID = "UA-58325205-6"; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

var pageview = function pageview(url) {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

var event = function event(_ref) {
  var action = _ref.action,
      category = _ref.category,
      label = _ref.label,
      value = _ref.value;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ })

})
//# sourceMappingURL=_app.js.1ac14282a34c1a74092e.hot-update.js.map