"use strict";(self.webpackChunkTopWritePlugins_ad=self.webpackChunkTopWritePlugins_ad||[]).push([[493],{288:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(99);function o(){const{config:e}=(0,n.useBook)();return function(e){const r=t(181);return e.getPluginConfig("ad",r)}(e)}},132:(e,r,t)=>{t.d(r,{Z:()=>i});var n,o=t(159);function i(e){let{url:r,image:t}=e;return(0,o.jsx)(a,{children:(0,o.jsx)("a",{target:"_blank",href:r,children:(0,o.jsx)("img",{src:t})})})}const a=t(99).styled.p(n||(c=["\n\n  img {\n    max-width: 100%;\n    width: 100%;\n  }\n\n  &:first-child {\n    margin-top: 0;\n  }\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"],l||(l=c.slice(0)),n=Object.freeze(Object.defineProperties(c,{raw:{value:Object.freeze(l)}}))));var c,l},493:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var n=t(159),o=t(288),i=t(132);function a(){const e=(0,o.Z)().getValue("beforeArticleBody");return e&&e.image?(0,n.jsx)(i.Z,{url:e.url,image:e.image}):null}},2:e=>{
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,l=o(e),f=1;f<arguments.length;f++){for(var u in a=Object(arguments[f]))t.call(a,u)&&(l[u]=a[u]);if(r){c=r(a);for(var s=0;s<c.length;s++)n.call(a,c[s])&&(l[c[s]]=a[c[s]])}}return l}},709:(e,r,t)=>{
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
t(2);var n=t(196),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,i={},f=null,u=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:u,props:i,_owner:a.current}}r.jsx=f},159:(e,r,t)=>{e.exports=t(709)}}]);
//# sourceMappingURL=493-9584dc.js.map