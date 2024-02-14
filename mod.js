// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var t=Math.floor;function n(r){return t(r)===r}var e=Number,a=e.NEGATIVE_INFINITY;function o(r){return Math.abs(r)}var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var f=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;var c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"";var s=i&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,a,o;if(null==r)return f.call(r);n=r[l],o=l,t=null!=(a=r)&&u.call(a,o);try{r[l]=void 0}catch(t){return f.call(r)}return e=f.call(r),t?r[l]=n:delete r[l],e}:function(r){return f.call(r)},p="function"==typeof Uint32Array;var y="function"==typeof Uint32Array?Uint32Array:null;var v,w="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,t,n;if("function"!=typeof y)return!1;try{t=new y(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(p&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?w:function(){throw new Error("not implemented")};var d=v,g="function"==typeof Float64Array;var h="function"==typeof Float64Array?Float64Array:null;var A,b="function"==typeof Float64Array?Float64Array:void 0;A=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,NaN]),n=t,r=(g&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var F=A,m="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var I,E="function"==typeof Uint8Array?Uint8Array:void 0;I=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,256,257]),n=t,r=(m&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var _=I,T="function"==typeof Uint16Array;var j="function"==typeof Uint16Array?Uint16Array:null;var U,S="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,t,n;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,65536,65537]),n=t,r=(T&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?S:function(){throw new Error("not implemented")};var k,x={uint16:U,uint8:_};(k=new x.uint16(1))[0]=4660;var G=52===new x.uint8(k.buffer)[0],V=!0===G?1:0,O=new F(1),H=new d(O.buffer);function W(r){return O[0]=r,H[V]}function L(r,t){var n,e,a,o;return a=(o=r*r)*o,e=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),e+=a*a*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(a=1-(n=.5*o))+(1-a-n+(o*e-r*t))}var $=-.16666666666666632;function M(r,t){var n,e,a;return n=.00833333333332249+(a=r*r)*(27557313707070068e-22*a-.0001984126982985795)+a*(a*a)*(1.58969099521155e-10*a-2.5050760253406863e-8),e=a*r,0===t?r+e*($+a*n):r-(a*(.5*t-e*n)-t-e*$)}var C="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var Y,R="function"==typeof Float64Array?Float64Array:void 0;Y=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P([1,3.14,-3.14,NaN]),n=t,r=(C&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?R:function(){throw new Error("not implemented")};var Z=!0===G?0:1,X=new Y(1),q=new d(X.buffer);var z="function"==typeof Float64Array;var B="function"==typeof Float64Array?Float64Array:null;var D,J,K,Q="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,t,n;if("function"!=typeof B)return!1;try{t=new B([1,3.14,-3.14,NaN]),n=t,r=(z&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Q:function(){throw new Error("not implemented")},!0===G?(J=1,K=0):(J=0,K=1);var rr={HIGH:J,LOW:K},tr=new D(1),nr=new d(tr.buffer),er=rr.HIGH,ar=rr.LOW;function or(r,t){return nr[er]=r,nr[ar]=t,tr[0]}var ir=Number.POSITIVE_INFINITY,fr=e.NEGATIVE_INFINITY,ur=e.NEGATIVE_INFINITY;function cr(r){return r===ir||r===ur}var lr="function"==typeof Object.defineProperty?Object.defineProperty:null;var sr=Object.defineProperty;function pr(r){return"number"==typeof r}function yr(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function vr(r,t,n){var e=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+yr(a):yr(a)+r,e&&(r="-"+r)),r}var wr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase;function gr(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!pr(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=vr(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=vr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===dr.call(r.specifier)?dr.call(n):wr.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function hr(r){return"string"==typeof r}var Ar=Math.abs,br=String.prototype.toLowerCase,Fr=String.prototype.toUpperCase,mr=String.prototype.replace,Nr=/e\+(\d)$/,Ir=/e-(\d)$/,Er=/^(\d+)$/,_r=/^(\d+)e/,Tr=/\.0$/,jr=/\.0*e/,Ur=/(\..*[^0])0*e/;function Sr(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!pr(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":Ar(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=mr.call(n,Ur,"$1e"),n=mr.call(n,jr,"e"),n=mr.call(n,Tr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=mr.call(n,Nr,"e+0$1"),n=mr.call(n,Ir,"e-0$1"),r.alternate&&(n=mr.call(n,Er,"$1."),n=mr.call(n,_r,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Fr.call(r.specifier)?Fr.call(n):br.call(n)}function kr(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function xr(r,t,n){var e=t-r.length;return e<0?r:r=n?r+kr(e):kr(e)+r}var Gr=String.fromCharCode,Vr=isNaN,Or=Array.isArray;function Hr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Wr(r){var t,n,e,a,o,i,f,u,c;if(!Or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(i="",f=1,u=0;u<r.length;u++)if(hr(e=r[u]))i+=e;else{if(t=void 0!==e.precision,!(e=Hr(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,c=0;c<n.length;c++)switch(a=n.charAt(c)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,Vr(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,Vr(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=gr(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!Vr(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Vr(o)?String(e.arg):Gr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=Sr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=vr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=xr(e.arg,e.width,e.padRight)),i+=e.arg||"",f+=1}return i}var Lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $r(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Mr(r){var t,n,e,a;for(n=[],a=0,e=Lr.exec(r);e;)(t=r.slice(a,Lr.lastIndex-e[0].length)).length&&n.push(t),n.push($r(e)),a=Lr.lastIndex,e=Lr.exec(r);return(t=r.slice(a)).length&&n.push(t),n}function Cr(r){return"string"==typeof r}function Pr(r){var t,n;if(!Cr(r))throw new TypeError(Pr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[Mr(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return Wr.apply(null,t)}var Yr=Object.prototype,Rr=Yr.toString,Zr=Yr.__defineGetter__,Xr=Yr.__defineSetter__,qr=Yr.__lookupGetter__,zr=Yr.__lookupSetter__;var Br=function(){try{return lr({},"x",{}),!0}catch(r){return!1}}()?sr:function(r,t,n){var e,a,o,i;if("object"!=typeof r||null===r||"[object Array]"===Rr.call(r))throw new TypeError(Pr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===Rr.call(n))throw new TypeError(Pr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((a="value"in n)&&(qr.call(r,t)||zr.call(r,t)?(e=r.__proto__,r.__proto__=Yr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,i="set"in n,a&&(o||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Zr&&Zr.call(r,t,n.get),i&&Xr&&Xr.call(r,t,n.set),r};function Dr(r,t,n){Br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var Jr="function"==typeof Float64Array;var Kr="function"==typeof Float64Array?Float64Array:null;var Qr,rt,tt,nt="function"==typeof Float64Array?Float64Array:void 0;Qr=function(){var r,t,n;if("function"!=typeof Kr)return!1;try{t=new Kr([1,3.14,-3.14,NaN]),n=t,r=(Jr&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?nt:function(){throw new Error("not implemented")},!0===G?(rt=1,tt=0):(rt=0,tt=1);var et={HIGH:rt,LOW:tt},at=new Qr(1),ot=new d(at.buffer),it=et.HIGH,ft=et.LOW;function ut(r,t,n,e){return at[0]=r,t[e]=ot[it],t[e+n]=ot[ft],t}function ct(r){return ut(r,[0,0],1,0)}Dr(ct,"assign",ut);var lt=[0,0];function st(r,t){var n,e;return ct.assign(r,lt,1,0),n=lt[0],n&=2147483647,e=W(t),or(n|=e&=2147483648,lt[1])}function pt(t,n,e,a){return r(t)||cr(t)?(n[a]=t,n[a+e]=0,n):0!==t&&function(r){return Math.abs(r)}(t)<22250738585072014e-324?(n[a]=4503599627370496*t,n[a+e]=-52,n):(n[a]=t,n[a+e]=0,n)}Dr((function(r){return pt(r,[0,0],1,0)}),"assign",pt);var yt="function"==typeof Float64Array;var vt="function"==typeof Float64Array?Float64Array:null;var wt,dt,gt,ht="function"==typeof Float64Array?Float64Array:void 0;wt=function(){var r,t,n;if("function"!=typeof vt)return!1;try{t=new vt([1,3.14,-3.14,NaN]),n=t,r=(yt&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?ht:function(){throw new Error("not implemented")},!0===G?(dt=1,gt=0):(dt=0,gt=1);var At={HIGH:dt,LOW:gt},bt=new wt(1),Ft=new d(bt.buffer),mt=At.HIGH,Nt=At.LOW;function It(r,t,n,e){return bt[0]=r,t[e]=Ft[mt],t[e+n]=Ft[Nt],t}function Et(r){return It(r,[0,0],1,0)}Dr(Et,"assign",It);var _t=[0,0],Tt=[0,0];function jt(t,n){var e,a;return 0===n||0===t||r(t)||cr(t)?t:(pt(t,_t,1,0),n+=_t[1],n+=function(r){var t=W(r);return(t=(2146435072&t)>>>20)-1023|0}(t=_t[0]),n<-1074?st(0,t):n>1023?t<0?fr:ir:(n<=-1023?(n+=52,a=2220446049250313e-31):a=1,Et.assign(t,Tt,1,0),e=Tt[0],e&=2148532223,a*or(e|=n+1023<<20,Tt[1])))}function Ut(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var St=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],kt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],xt=5.960464477539063e-8,Gt=Ut(20),Vt=Ut(20),Ot=Ut(20),Ht=Ut(20);function Wt(r,n,e,a,o,i,f,u,c){var l,s,p,y,v,w,d,g,h;for(y=i,h=a[e],g=e,v=0;g>0;v++)s=xt*h|0,Ht[v]=h-16777216*s|0,h=a[g-1]+s,g-=1;if(h=jt(h,o),h-=8*t(.125*h),h-=d=0|h,p=0,o>0?(d+=v=Ht[e-1]>>24-o,Ht[e-1]-=v<<24-o,p=Ht[e-1]>>23-o):0===o?p=Ht[e-1]>>23:h>=.5&&(p=2),p>0){for(d+=1,l=0,v=0;v<e;v++)g=Ht[v],0===l?0!==g&&(l=1,Ht[v]=16777216-g):Ht[v]=16777215-g;if(o>0)switch(o){case 1:Ht[e-1]&=8388607;break;case 2:Ht[e-1]&=4194303}2===p&&(h=1-h,0!==l&&(h-=jt(1,o)))}if(0===h){for(g=0,v=e-1;v>=i;v--)g|=Ht[v];if(0===g){for(w=1;0===Ht[i-w];w++);for(v=e+1;v<=e+w;v++){for(c[u+v]=St[f+v],s=0,g=0;g<=u;g++)s+=r[g]*c[u+(v-g)];a[v]=s}return Wt(r,n,e+=w,a,o,i,f,u,c)}}if(0===h)for(e-=1,o-=24;0===Ht[e];)e-=1,o-=24;else(h=jt(h,-o))>=16777216?(s=xt*h|0,Ht[e]=h-16777216*s|0,o+=24,Ht[e+=1]=s):Ht[e]=0|h;for(s=jt(1,o),v=e;v>=0;v--)a[v]=s*Ht[v],s*=xt;for(v=e;v>=0;v--){for(s=0,w=0;w<=y&&w<=e-v;w++)s+=kt[w]*a[v+w];Ot[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Ot[v];for(n[0]=0===p?s:-s,s=Ot[0]-s,v=1;v<=e;v++)s+=Ot[v];return n[1]=0===p?s:-s,7&d}function Lt(r,t,n,e){var a,o,i,f,u,c,l;for(4,(o=(n-3)/24|0)<0&&(o=0),f=n-24*(o+1),c=o-(i=e-1),l=i+4,u=0;u<=l;u++)Gt[u]=c<0?0:St[c],c+=1;for(u=0;u<=4;u++){for(a=0,c=0;c<=i;c++)a+=r[c]*Gt[i+(u-c)];Vt[u]=a}return 4,Wt(r,t,4,Vt,f,4,o,i,Gt)}var $t=Math.round;function Mt(r,t,n){var e,a,o,i,f;return o=r-1.5707963267341256*(e=$t(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=o-i,f-(W(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((a=o)-(o=a-(i=6077100506303966e-26*e))-i),n[0]=o-i,f-(W(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((a=o)-(o=a-(i=20222662487111665e-37*e))-i),n[0]=o-i)),n[1]=o-n[0]-i,e}var Ct=1.5707963267341256,Pt=6077100506506192e-26,Yt=2*Pt,Rt=4*Pt,Zt=[0,0,0],Xt=[0,0];function qt(r,t){var n,e,a,o,i,f,u;if((a=2147483647&W(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(a<=1074752122)return 598523==(1048575&a)?Mt(r,a,t):a<=1073928572?r>0?(u=r-Ct,t[0]=u-Pt,t[1]=u-t[0]-Pt,1):(u=r+Ct,t[0]=u+Pt,t[1]=u-t[0]+Pt,-1):r>0?(u=r-2*Ct,t[0]=u-Yt,t[1]=u-t[0]-Yt,2):(u=r+2*Ct,t[0]=u+Yt,t[1]=u-t[0]+Yt,-2);if(a<=1075594811)return a<=1075183036?1074977148===a?Mt(r,a,t):r>0?(u=r-3*Ct,t[0]=u-1.8231301519518578e-10,t[1]=u-t[0]-1.8231301519518578e-10,3):(u=r+3*Ct,t[0]=u+1.8231301519518578e-10,t[1]=u-t[0]+1.8231301519518578e-10,-3):1075388923===a?Mt(r,a,t):r>0?(u=r-4*Ct,t[0]=u-Rt,t[1]=u-t[0]-Rt,4):(u=r+4*Ct,t[0]=u+Rt,t[1]=u-t[0]+Rt,-4);if(a<1094263291)return Mt(r,a,t);if(a>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return X[0]=r,q[Z]}(r),u=or(a-((e=(a>>20)-1046)<<20|0),n),i=0;i<2;i++)Zt[i]=0|u,u=16777216*(u-Zt[i]);for(Zt[2]=u,o=3;0===Zt[o-1];)o-=1;return f=Lt(Zt,Xt,e,o),r<0?(t[0]=-Xt[0],t[1]=-Xt[1],-f):(t[0]=Xt[0],t[1]=Xt[1],f)}var zt=[0,0];var Bt=e.NEGATIVE_INFINITY,Dt=3.141592653589793;function Jt(r){return n(r/2)}function Kt(r){return Jt(r>0?r-1:r+1)}var Qt=Math.sqrt;function rn(r){return Math.abs(r)}var tn="function"==typeof Float64Array;var nn="function"==typeof Float64Array?Float64Array:null;var en,an,on,fn="function"==typeof Float64Array?Float64Array:void 0;en=function(){var r,t,n;if("function"!=typeof nn)return!1;try{t=new nn([1,3.14,-3.14,NaN]),n=t,r=(tn&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?fn:function(){throw new Error("not implemented")},!0===G?(an=1,on=0):(an=0,on=1);var un={HIGH:an,LOW:on},cn=new en(1),ln=new d(cn.buffer),sn=un.HIGH,pn=un.LOW;function yn(r,t,n,e){return cn[0]=r,t[e]=ln[sn],t[e+n]=ln[pn],t}function vn(r){return yn(r,[0,0],1,0)}Dr(vn,"assign",yn);var wn="function"==typeof Float64Array;var dn="function"==typeof Float64Array?Float64Array:null;var gn,hn="function"==typeof Float64Array?Float64Array:void 0;gn=function(){var r,t,n;if("function"!=typeof dn)return!1;try{t=new dn([1,3.14,-3.14,NaN]),n=t,r=(wn&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?hn:function(){throw new Error("not implemented")};var An=!0===G?0:1,bn=new gn(1),Fn=new d(bn.buffer);function mn(r,t){return bn[0]=r,Fn[An]=t>>>0,bn[0]}function Nn(r){return 0|r}var In=e.NEGATIVE_INFINITY;var En="function"==typeof Float64Array;var _n="function"==typeof Float64Array?Float64Array:null;var Tn,jn="function"==typeof Float64Array?Float64Array:void 0;Tn=function(){var r,t,n;if("function"!=typeof _n)return!1;try{t=new _n([1,3.14,-3.14,NaN]),n=t,r=(En&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?jn:function(){throw new Error("not implemented")};var Un=!0===G?1:0,Sn=new Tn(1),kn=new d(Sn.buffer);function xn(r,t){return Sn[0]=r,kn[Un]=t>>>0,Sn[0]}var Gn=[1,1.5],Vn=[0,.5849624872207642],On=[0,1.350039202129749e-8];var Hn=1e300,Wn=1e-300,Ln=[0,0],$n=[0,0];function Mn(t,e){var a,o,i,f,u,c,l,s,p,y,v,w,d,g;if(r(t)||r(e))return NaN;if(vn.assign(e,Ln,1,0),u=Ln[0],0===Ln[1]){if(0===e)return 1;if(1===e)return t;if(-1===e)return 1/t;if(.5===e)return Qt(t);if(-.5===e)return 1/Qt(t);if(2===e)return t*t;if(3===e)return t*t*t;if(4===e)return(t*=t)*t;if(cr(e))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:rn(r)<1==(t===ir)?0:ir}(t,e)}if(vn.assign(t,Ln,1,0),f=Ln[0],0===Ln[1]){if(0===f)return function(r,t){return t===In?ir:t===ir?0:t>0?Kt(t)?r:0:Kt(t)?st(ir,r):ir}(t,e);if(1===t)return 1;if(-1===t&&Kt(e))return-1;if(cr(t))return t===In?Mn(-0,-e):e<0?0:ir}if(t<0&&!1===n(e))return(t-t)/(t-t);if(i=rn(t),a=2147483647&f|0,o=2147483647&u|0,l=u>>>31|0,c=(c=f>>>31|0)&&Kt(e)?-1:1,o>1105199104){if(o>1139802112)return function(r,t){return(2147483647&W(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(t,e);if(a<1072693247)return 1===l?c*Hn*Hn:c*Wn*Wn;if(a>1072693248)return 0===l?c*Hn*Hn:c*Wn*Wn;v=function(r,t){var n,e,a,o,i,f;return n=(i=1.9259629911266175e-8*(a=t-1)-a*a*(0===(f=a)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=mn(e=(o=1.4426950216293335*a)+i,0))-o),r[0]=e,r[1]=n,r}($n,i)}else v=function(r,t,n){var e,a,o,i,f,u,c,l,s,p,y,v,w,d,g,h,A,b,F,m,N;return b=0,n<1048576&&(b-=53,n=W(t*=9007199254740992)),b+=(n>>20)-1023|0,n=1072693248|(F=1048575&n|0),F<=235662?m=0:F<767610?m=1:(m=0,b+=1,n-=1048576),i=mn(a=(h=(t=xn(t,n))-(c=Gn[m]))*(A=1/(t+c)),0),e=524288+(n>>1|536870912),u=xn(0,e+=m<<18),g=(o=a*a)*o*(0===(N=o)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),u=mn(u=3+(o=i*i)+(g+=(f=A*(h-i*u-i*(t-(u-c))))*(i+a)),0),w=(y=-7.028461650952758e-9*(s=mn(s=(h=i*u)+(A=f*u+(g-(u-3-o))*a),0))+.9617966939259756*(A-(s-h))+On[m])-((v=mn(v=(p=.9617967009544373*s)+y+(l=Vn[m])+(d=b),0))-d-l-p),r[0]=v,r[1]=w,r}($n,i,a);if(w=(y=(e-(s=mn(e,0)))*v[0]+e*v[1])+(p=s*v[0]),vn.assign(w,Ln,1,0),d=Nn(Ln[0]),g=Nn(Ln[1]),d>=1083179008){if(0!=(d-1083179008|g))return c*Hn*Hn;if(y+8008566259537294e-32>w-p)return c*Hn*Hn}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|g))return c*Wn*Wn;if(y<=w-p)return c*Wn*Wn}return w=function(r,t,n){var e,a,o,i,f,u,c,l,s,p,y;return p=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(e=((l=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-p>>>0,r<0&&(l=-l),t-=o=xn(0,e)),r=Nn(r=W(c=1-((c=(i=.6931471824645996*(o=mn(o=n+t,0)))+(f=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(a=c-(o=c*c)*(0===(y=o)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(a-2)-((u=f-(c-i))+c*u)-c))),(r+=l<<20>>>0)>>20<=0?jt(c,l):xn(c,r)}(d,p,y),c*w}var Cn=Math.ceil;function Pn(r){return r<0?Cn(r):t(r)}var Yn=e.NEGATIVE_INFINITY;function Rn(t){var n;return r(t)||t===ir?t:t===Yn?0:t>709.782712893384?ir:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(r,t,n){var e,a,o,i;return jt(1-(t-(e=r-t)*(o=e-(a=e*e)*(0===(i=a)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(t-.6931471803691238*(n=Pn(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*n,n)}function Zn(r){var t,n,e;return t=1+(t=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(t),n=Rn(r),2.5066282746310007*(n=r>143.01608?(e=Mn(r,.5*r-.25))*(e/n):Mn(r,r-.5)/n)*t}function Xn(r,t){return t/((1+.5772156649015329*r)*r)}function qn(e){var i,f,u,c;if(n(e)&&e<0||e===Bt||r(e))return NaN;if(0===e)return function(r){return 0===r&&1/r===a}(e)?Bt:ir;if(e>171.61447887182297)return ir;if(e<-170.5674972726612)return 0;if((f=o(e))>33)return e>=0?Zn(e):(i=0==(1&(u=t(f)))?-1:1,(c=f-u)>.5&&(c=f-(u+=1)),c=f*function(r){var t;if(t=W(r),(t&=2147483647)<=1072243195)return t<1045430272?r:M(r,0);if(t>=2146435072)return NaN;switch(3&qt(r,zt)){case 0:return M(zt[0],zt[1]);case 1:return L(zt[0],zt[1]);case 2:return-M(zt[0],zt[1]);default:return-L(zt[0],zt[1])}}(Dt*c),i*Dt/(o(c)*Zn(f)));for(c=1;e>=3;)c*=e-=1;for(;e<0;){if(e>-1e-9)return Xn(e,c);c/=e,e+=1}for(;e<2;){if(e<1e-9)return Xn(e,c);c/=e,e+=1}return 2===e?c:c*function(r){var t,n;return 0===r?1:((r<0?-r:r)<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(t=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),t/n)}(e-=2)}function zn(t,n,e){var a,o;return r(t)||r(n)||r(e)||t<=0||n<=0?NaN:t<=2?ir:(a=qn(1-1/t),o=qn(1-2/t),n*Qt(o-a*a))}export{zn as default};
//# sourceMappingURL=mod.js.map
