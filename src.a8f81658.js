parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P6lu":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.colors=void 0;var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];exports.colors=e;
},{}],"axEZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.randomIntegerFromInterval=void 0;var r=function(r,e){return Math.floor(Math.random()*(e-r+1)+r)};exports.randomIntegerFromInterval=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=require("./partials/colors"),r=require("./partials/randomizer"),e=1e3,o={start:document.querySelector('[data-action="start"]'),stop:document.querySelector('[data-action="stop"]'),body:document.body},a=!0;function n(){if(a){var t=setInterval(c,e);a=!1,o.stop.addEventListener("click",function(){clearInterval(t),a=!0})}}function c(){var e=(0,r.randomIntegerFromInterval)(0,t.colors.length-1);o.body.style.backgroundColor=t.colors[e]}o.start.addEventListener("click",n);
},{"./partials/colors":"P6lu","./partials/randomizer":"axEZ"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.a8f81658.js.map