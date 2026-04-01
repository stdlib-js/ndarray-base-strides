// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy-indexed@v0.2.3-esm/index.mjs";function r(r,d){var i,n,o;return"object"!=typeof(o=r.strides)||null===o?0===(n=r.shape).length?[0]:(i=r.order,s(i)||(i="row-major"),e(n,i)):d?t(o):o}export{r as default};
//# sourceMappingURL=index.mjs.map
