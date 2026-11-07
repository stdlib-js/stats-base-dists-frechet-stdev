"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=a(function(N,s){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-gamma/dist'),c=require('@stdlib/math-base-special-sqrt/dist'),f=require('@stdlib/constants-float64-pinf/dist');function g(e,r,i){var t,n;return u(e)||u(r)||u(i)||e<=0||r<=0?NaN:e<=2?f:(t=v(1-1/e),n=v(1-2/e),r*c(n-t*t))}s.exports=g
});var m=q();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
