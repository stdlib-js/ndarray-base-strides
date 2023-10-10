"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=o(function(h,a){
var u=require('@stdlib/ndarray-base-shape2strides/dist'),d=require('@stdlib/array-base-copy-indexed/dist'),f="row-major";function p(e,r){var s,i,t;return t=e.strides,typeof t!="object"||t===null?(i=e.shape,i.length===0?[0]:(s=e.order,typeof s!="string"&&(s=f),u(i,s))):r?d(t):t}a.exports=p
});var v=n();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
