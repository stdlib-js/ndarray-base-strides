// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.4.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy-indexed@v0.2.3-esm/index.mjs";var d=t.get("order");function i(t,i){var n,a,m;return"object"!=typeof(m=t.strides)||null===m?0===(a=t.shape).length?[0]:(n=t.order,s(n)||(n=d),e(a,n)):i?r(m):m}export{i as default};
//# sourceMappingURL=index.mjs.map
