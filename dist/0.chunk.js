webpackJsonp([0],{57:function(e,t,a){"use strict";function c(e){var t=e.match;return React.createElement("div",null,React.createElement("p",null,"match.params.spec: ",t.params.spec),React.createElement("p",null,"match.url: ",t.url))}function r(e){var t=e.match;return React.createElement("div",null,React.createElement(l.Link,{to:t.url+"/unsorted"},"unsorted"),React.createElement(l.Route,{exact:!0,path:t.url+"/:spec",component:c}),React.createElement("p",null,"test"),"match.params.id: ",t.params.id,React.createElement("p",null,"match.url: ",t.url))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=a(15)}});