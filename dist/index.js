"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var a=n(function(l,u){
var v=require('@stdlib/assert-is-string/dist').isPrimitive,d=require('@stdlib/ndarray-base-shape2strides/dist'),o=require('@stdlib/ndarray-defaults/dist'),f=require('@stdlib/array-base-copy-indexed/dist'),p=o.get("order");function c(i,r){var e,s,t;return t=i.strides,typeof t!="object"||t===null?(s=i.shape,s.length===0?[0]:(e=i.order,v(e)||(e=p),d(s,e))):r?f(t):t}u.exports=c
});var q=a();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
