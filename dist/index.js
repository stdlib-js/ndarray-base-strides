"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(q,a){
var o=require('@stdlib/assert-is-string/dist').isPrimitive,v=require('@stdlib/ndarray-base-shape2strides/dist'),d=require('@stdlib/array-base-copy-indexed/dist'),f="row-major";function p(e,r){var t,s,i;return i=e.strides,typeof i!="object"||i===null?(s=e.shape,s.length===0?[0]:(t=e.order,o(t)||(t=f),v(s,t))):r?d(i):i}a.exports=p
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
