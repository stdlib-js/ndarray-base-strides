// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-copy-indexed@v0.1.0-esm/index.mjs";function r(r,t){var d,n,i;return"object"!=typeof(i=r.strides)||null===i?0===(n=r.shape).length?[0]:("string"!=typeof(d=r.order)&&(d="row-major"),e(n,d)):t?s(i):i}export{r as default};
//# sourceMappingURL=index.mjs.map
