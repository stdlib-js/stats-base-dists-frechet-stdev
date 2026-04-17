"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(N,v){
var t=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-gamma/dist'),c=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/constants-float64-pinf/dist');function g(e,r,q){var i,u;return t(e)||t(r)||t(q)||e<=0||r<=0?NaN:e<=2?f:(i=n(1-1/e),u=n(1-2/e),r*c(u-i*i))}v.exports=g
});var m=s();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
