webpackJsonp([0],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Test;

var _reactRouterDom = __webpack_require__(66);

function Testsub(_ref) {
  var match = _ref.match;

  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Subroute"
    ),
    React.createElement(
      "p",
      null,
      "match.params.itemName: ",
      match.params.itemName
    ),
    React.createElement(
      "p",
      null,
      "match.url: ",
      match.url
    )
  );
}

function Test(_ref2) {
  var match = _ref2.match;

  return React.createElement(
    "div",
    null,
    React.createElement(
      _reactRouterDom.Link,
      { to: "/" },
      "Home"
    ),
    React.createElement(
      "p",
      null,
      "test"
    ),
    "match.params.id: ",
    match.params.id,
    React.createElement(
      "p",
      null,
      "match.url: ",
      match.url
    ),
    React.createElement(
      _reactRouterDom.Link,
      { to: match.url + "/unsorted" },
      "unsorted"
    ),
    React.createElement("br", null),
    React.createElement(
      _reactRouterDom.Link,
      { to: match.url + "/unsorted2" },
      "unsorted2"
    ),
    React.createElement(_reactRouterDom.Route, { exact: true, path: match.url + "/:itemName", component: Testsub })
  );
}

/***/ })

});