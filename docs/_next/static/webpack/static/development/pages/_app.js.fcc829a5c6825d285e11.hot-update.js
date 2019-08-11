webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/react-vk/dist/react-vk.umd.production.min.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-vk/dist/react-vk.umd.production.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?t(exports,__webpack_require__(/*! react */ "./node_modules/react/index.js")):undefined}(this,function(e,t){"use strict";var n="default"in t?t.default:t;function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,o=!1,r=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==u.return||u.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var s=n.createContext(null),u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiId=t,this.options=n,this.promise=null,this.load()}var t,n,o;return t=e,(n=[{key:"init",value:function(){var e=this.apiId,t=this.options.onlyWidgets;e&&window.VK.init({apiId:e,onlyWidgets:t})}},{key:"load",value:function(){var e=this,t=this.options.version;return this.promise?this.promise:(this.promise=new Promise(function(n){window.VK&&window.VK.init?(e.init(),n(window.VK)):window.vkAsyncInit=function(){e.init(),n(window.VK)};var i="https://vk.com/js/api/openapi.js?".concat(t);if(!document.getElementById("vk-openapi")){var o=document.createElement("script");o.type="text/javascript",o.id="vk-openapi",o.src=i,o.async=!0,document.head.appendChild(o)}}),this.promise)}}])&&i(t.prototype,n),o&&i(t,o),e}(),d="undefined"!=typeof window&&window.document&&window.document.createElement,c=function(e){var i=e.onApiAvailable,o=e.apiId,c=e.options,a=e.children,l=r(t.useState(null),2),f=l[0],m=l[1];return t.useEffect(function(){d&&new u(o,c).load().then(function(e){i(e),m(e)})},[]),f?n.createElement(s.Provider,{value:f},a):null};c.defaultProps={apiId:null,options:{version:160,onlyWidgets:!0},onApiAvailable:function(){}};var a=function(e){var i=e.elementId,o=e.options,r=e.groupId,u=e.onAllow,d=e.onDeny,c=t.useContext(s);return t.useEffect(function(){return c.Widgets.AllowMessagesFromCommunity(i,o,r),c.Observer.subscribe("widgets.allowMessagesFromCommunity.allowed",function(e){return u(e)}),c.Observer.subscribe("widgets.allowMessagesFromCommunity.denied",function(e){return d(e)}),function(){return c.Observer.unsubscribe("widgets.allowMessagesFromCommunity.allowed")}},[]),n.createElement("div",{id:i})};a.defaultProps={elementId:"vk_allow_messages_from_community",options:{height:24},onAllow:function(){},onDeny:function(){}};var l=function(e){var i=e.elementId,o=e.appId,r=e.options,u=t.useContext(s);return t.useEffect(function(){u.Widgets.App(i,o,r)},[]),n.createElement("div",{id:i})};l.defaultProps={elementId:"vk_app",options:{mode:1}};var f=function(e){var i=e.elementId,r=e.options,u=t.useContext(s);return t.useEffect(function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){o(e,t,n[t])})}return e}({},r);e.onAuth=function(e,t,n,i,o,s){return r.onAuth(e,t,n,i,o,s)},u.Widgets.Auth(i,e)},[]),n.createElement("div",{id:i})};f.defaultProps={elementId:"vk_auth",options:{width:300,onAuth:function(){}}};var m=function(e){var i=e.elementId,o=e.options,r=e.pageId,u=e.onNewComment,d=e.onDeleteComment,c=t.useContext(s);return t.useEffect(function(){return c.Widgets.Comments(i,o,r),c.Observer.subscribe("widgets.comments.new_comment",function(e,t,n,i){return u(e,t,n,i)}),c.Observer.subscribe("widgets.comments.delete_comment",d),function(){c.Observer.unsubscribe("widgets.comments.new_comment"),c.Observer.unsubscribe("widgets.comments.delete_comment")}},[]),n.createElement("div",{id:i})};m.defaultProps={elementId:"vk_comments",options:{height:0,limit:10,attach:"*",autoPublish:0,mini:"auto",norealtime:0},pageId:null,onNewComment:function(){},onDeleteComment:function(){}};var p=function(e){var i=e.elementId,o=e.options,r=t.useContext(s);return t.useEffect(function(){r.Widgets.CommentsBrowse(i,o)},[]),n.createElement("div",{id:i})};p.defaultProps={elementId:"vk_comments_browse",options:{height:0,limit:10,mini:"auto",norealtime:0}};var v=function(e){var i=e.elementId,o=e.groupId,r=e.options,u=e.onMount,d=t.useContext(s);return t.useEffect(function(){var e=d.Widgets.CommunityMessages(i,o,r);u(e,i)},[]),n.createElement("div",{id:i})};v.defaultProps={elementId:"vk_community_messages",options:{onCanNotWrite:function(){},welcomeScreen:1,expandTimeout:0,expanded:0,widgetPosition:"right",buttonType:"blue_circle",disableButtonTooltip:0},onMount:function(){}};var b=function(e){var i=e.elementId,o=e.options,r=e.ownerId,u=t.useContext(s);return t.useEffect(function(){u.Widgets.ContactUs(i,o,-r)},[]),n.createElement("div",{id:i})};b.defaultProps={elementId:"vk_contact_us",options:{height:24}};var w=function(e){var i=e.elementId,o=e.options,r=e.groupId,u=e.onJoin,d=e.onLeave,c=t.useContext(s);return t.useEffect(function(){return c.Widgets.Group(i,o,r),c.Observer.subscribe("widgets.groups.joined",u),c.Observer.subscribe("widgets.groups.leaved",d),function(){c.Observer.unsubscribe("widgets.groups.joined"),c.Observer.unsubscribe("widgets.groups.leaved")}},[]),n.createElement("div",{id:i})};w.defaultProps={elementId:"vk_groups",options:{width:"auto",mode:3,no_cover:1,wide:1},onJoin:function(){},onLeave:function(){}};var g=function(e){var i=e.elementId,o=e.options,r=e.pageId,u=e.onLike,d=e.onUnlike,c=e.onShare,a=e.onUnshare,l=t.useContext(s);return t.useEffect(function(){return r?l.Widgets.Like(i,o,r):l.Widgets.Like(i,o),l.Observer.subscribe("widgets.like.liked",function(e){return u(e)}),l.Observer.subscribe("widgets.like.unliked",function(e){return d(e)}),l.Observer.subscribe("widgets.like.shared",function(e){return c(e)}),l.Observer.subscribe("widgets.like.unshared",function(e){return a(e)}),function(){l.Observer.unsubscribe("widgets.like.liked"),l.Observer.unsubscribe("widgets.like.unliked"),l.Observer.unsubscribe("widgets.like.shared"),l.Observer.unsubscribe("widgets.like.unshared")}},[]),n.createElement("div",{id:i})};g.defaultProps={elementId:"vk_like",options:{type:"full",width:350,height:22,verb:0},pageId:null,onLike:function(){},onUnlike:function(){},onShare:function(){},onUnshare:function(){}};var h=function(e){var i=e.elementId,o=e.ownerId,r=e.playlistId,u=e.hash,d=e.options,c=t.useContext(s);return t.useEffect(function(){c.Widgets.Playlist(i,-o,r,u,d)},[]),n.createElement("div",{id:i})};h.defaultProps={elementId:"vk_playlist",options:{}};var y=function(e){var i=e.elementId,o=e.options,r=e.pollId,u=t.useContext(s);return t.useEffect(function(){u.Widgets.Poll(i,o,r)},[]),n.createElement("div",{id:i})};y.defaultProps={elementId:"vk_poll",options:{height:24}};var I=function(e){var i=e.elementId,o=e.ownerId,r=e.postId,u=e.hash,d=e.options,c=t.useContext(s);return t.useEffect(function(){c.Widgets.Post(i,o,r,u,d)},[]),n.createElement("div",{id:i})};I.defaultProps={elementId:"vk_post",options:{}};var k=function(e){var i=e.elementId,o=e.options,r=t.useContext(s);return t.useEffect(function(){r.Widgets.Recommended(i,o)},[]),n.createElement("div",{id:i})};k.defaultProps={elementId:"vk_recommend",options:{limit:5,max:20,period:"week",sort:"friend_like",target:"parent"}};var E=function(e){var i=e.shareOptions,o=e.buttonOptions,r=n.createRef();return t.useEffect(function(){if(d)if(document.getElementById("vk-share"))window.VK.Share&&(r.current.innerHTML=window.VK.Share.button(i,o));else{var e=document.createElement("script");e.type="text/javascript",e.charset="windows-1251",e.id="vk-share",e.src="https://vk.com/js/api/share.js?93",e.async=!0,document.head.appendChild(e),e.addEventListener("load",function(){r.current.innerHTML=window.VK.Share.button(i,o)})}},[]),n.createElement("div",{ref:r})};E.defaultProps={shareOptions:null,buttonOptions:null};var C=function(e){var i=e.elementId,o=e.options,r=e.ownerId,u=e.onSubscribe,d=e.onUnsubscribe,c=t.useContext(s);return t.useEffect(function(){return c.Widgets.Subscribe(i,o,r),c.Observer.subscribe("widgets.subscribed",u),c.Observer.subscribe("widgets.unsubscribed",d),function(){c.Observer.unsubscribe("widgets.subscribed"),c.Observer.unsubscribe("widgets.unsubscribed")}},[]),n.createElement("div",{id:i})};C.defaultProps={elementId:"vk_subscribe",options:{mode:0,soft:0},onSubscribe:function(){},onUnsubscribe:function(){}};var O=function(e){var i=e.elementId,o=e.articleUrl,r=t.useContext(s);return t.useEffect(function(){r.Widgets.Article(i,o)},[]),n.createElement("div",{id:i})};O.defaultProps={elementId:"vk_article"},e.AllowMessagesFromCommunity=a,e.Application=l,e.Article=O,e.Auth=f,e.Comments=m,e.CommentsBrowse=p,e.CommunityMessages=v,e.ContactUs=b,e.Group=w,e.Like=g,e.Playlist=h,e.Poll=y,e.Post=I,e.Recommended=k,e.Share=E,e.Subscribe=C,e.default=c,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=react-vk.umd.production.min.js.map


/***/ }),

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
/* harmony import */ var react_vk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-vk */ "./node_modules/react-vk/dist/react-vk.umd.production.min.js");
/* harmony import */ var react_vk__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_vk__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-normalize */ "./node_modules/styled-normalize/dist/index.js");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/utils */ "./shared/utils.js");
/* harmony import */ var _shared_gtag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/gtag */ "./shared/gtag.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");







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
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_12__["createGlobalStyle"])(_templateObject(), styled_normalize__WEBPACK_IMPORTED_MODULE_13__["normalize"]);
next_router__WEBPACK_IMPORTED_MODULE_10___default.a.events.on("routeChangeComplete", function (url) {
  return Object(_shared_gtag__WEBPACK_IMPORTED_MODULE_15__["pageview"])(url);
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, "\u0412\u0438\u0437\u043E\u0432\u044B\u0439 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0446\u0435\u043D\u0442\u0440"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "description",
        content: "\u041F\u043E\u043C\u043E\u0436\u0435\u043C \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0438\u0437\u0443 \u0448\u0435\u043D\u0433\u0435\u043D \u0438 \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0442\u0440\u0430\u043D\u044B. \u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0443\u044E \u0431\u0438\u043E\u043C\u0435\u0442\u0440\u0438\u044E \u0438\u043B\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0431\u0435\u0437 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F. \u041C\u0438\u043D\u0438\u043C\u0443\u043C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432! \u0422\u0443\u0440\u044B \u0438 \u0430\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442\u044B. \u0421\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0435. \u0424\u043E\u0442\u043E \u043D\u0430 \u0432\u0438\u0437\u0443 \u0432 \u043F\u043E\u0434\u0430\u0440\u043E\u043A.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
        name: "keywords",
        content: "\u0432\u0438\u0437\u044B, \u0442\u0443\u0440\u044B, \u0430\u0432\u0442\u043E\u0431\u0443\u0441\u043D\u044B\u0435 \u0442\u0443\u0440\u044B, \u0448\u0435\u043D\u0433\u0435\u043D\u0441\u043A\u0430\u044F \u0432\u0438\u0437\u0430 \u0432 \u0441\u044B\u043A\u0442\u044B\u0432\u043A\u0430\u0440\u0435, \u0432\u0438\u0437\u043E\u0432\u044B\u0439 \u0446\u0435\u043D\u0442\u0440 \u0441\u044B\u043A\u0442\u044B\u0432\u043A\u0430\u0440, \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0438\u0437\u0443, \u0432\u0438\u0437\u044B \u0431\u044B\u0441\u0442\u0440\u043E",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "".concat(Object(_shared_utils__WEBPACK_IMPORTED_MODULE_14__["getAssetsPrefix"])(), "/static/images/favicon.ico"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=".concat(_shared_gtag__WEBPACK_IMPORTED_MODULE_15__["GA_TRACKING_ID"]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: "\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(_shared_gtag__WEBPACK_IMPORTED_MODULE_15__["GA_TRACKING_ID"], "');\n          ")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_12__["ThemeProvider"], {
        theme: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_vk__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.fcc829a5c6825d285e11.hot-update.js.map