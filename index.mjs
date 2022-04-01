// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";var m=s,a=t,n=e,r=i;var d=function(s,t,e){var i,d;return m(s)||m(t)||m(e)||s<=0||t<=0?NaN:s<=2?r:(i=a(1-1/s),d=a(1-2/s),t*n(d-i*i))};export{d as default};
//# sourceMappingURL=index.mjs.map
