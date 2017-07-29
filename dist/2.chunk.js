webpackJsonp([2],{

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Test;

var _reactRouterDom = __webpack_require__(33);

function Testsub(_ref) {
  var match = _ref.match;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'match.params.spec: ',
      match.params.spec
    ),
    React.createElement(
      'p',
      null,
      'match.url: ',
      match.url
    )
  );
}

function Test(_ref2) {
  var match = _ref2.match;

  return React.createElement(
    'div',
    null,
    React.createElement(
      _reactRouterDom.Link,
      { to: match.url + '/unsorted' },
      'unsorted'
    ),
    React.createElement(_reactRouterDom.Route, { exact: true, path: match.url + '/:spec', component: Testsub }),
    React.createElement(
      'p',
      null,
      'test'
    ),
    'match.params.id: ',
    match.params.id,
    React.createElement(
      'p',
      null,
      'match.url: ',
      match.url
    )
  );
}

/***/ })

});