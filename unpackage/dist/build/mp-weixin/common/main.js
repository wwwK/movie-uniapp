(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"030b":function(e,t,n){},"3a47":function(e,t,n){"use strict";n.r(t);var o=n("daa2");for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n("6ba1");var u,c,a,i,f=n("f0c5"),l=Object(f["a"])(o["default"],u,c,!1,null,null,null,!1,a,i);t["default"]=l.exports},"6ba1":function(e,t,n){"use strict";var o=n("030b"),r=n.n(o);r.a},"7c11":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("66fd"));function r(e){return e&&e.__esModule?e:{default:e}}var u={onLaunch:function(){e.getSystemInfo({success:function(e){o.default.prototype.StatusBar=e.statusBarHeight;var t=wx.getMenuButtonBoundingClientRect();o.default.prototype.Custom=t,o.default.prototype.CustomBar=t.bottom+t.top-e.statusBarHeight}})},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=u}).call(this,n("543d")["default"])},daa2:function(e,t,n){"use strict";n.r(t);var o=n("7c11"),r=n.n(o);for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);t["default"]=r.a},f80f:function(e,t,n){"use strict";(function(e){n("d369"),n("921b");var t=r(n("66fd")),o=r(n("3a47"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){n.e("pages/component/home/index").then(function(){return resolve(n("c985"))}.bind(null,n)).catch(n.oe)};t.default.component("home",i);var f=function(){n.e("pages/component/search/index").then(function(){return resolve(n("3f46"))}.bind(null,n)).catch(n.oe)};t.default.component("search",f);var l=function(){n.e("pages/component/mine/index").then(function(){return resolve(n("eb65"))}.bind(null,n)).catch(n.oe)};t.default.component("mine",l);var s=function(){n.e("colorui/components/cu-custom").then(function(){return resolve(n("949c"))}.bind(null,n)).catch(n.oe)};t.default.component("cu-custom",s),t.default.config.productionTip=!1,o.default.mpType="app";var p=new t.default(c({},o.default));e(p).$mount()}).call(this,n("543d")["createApp"])}},[["f80f","common/runtime","common/vendor"]]]);