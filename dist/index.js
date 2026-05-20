"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=n(function(l,u){
var v=require('@stdlib/assert-is-string/dist').isPrimitive,d=require('@stdlib/ndarray-base-shape2strides/dist'),o=require('@stdlib/ndarray-defaults/dist'),f=require('@stdlib/array-base-copy-indexed/dist'),p=o.get("order");function c(e,r){var t,s,i;return i=e.strides,typeof i!="object"||i===null?(s=e.shape,s.length===0?[0]:(t=e.order,v(t)||(t=p),d(s,t))):r?f(i):i}u.exports=c
});var q=a();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
