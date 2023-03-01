<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isNonConfigurablePropertyIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if an object's own or inherited property is non-configurable.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-nonconfigurable-property-in
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var isNonConfigurablePropertyIn = require( '@stdlib/assert-is-nonconfigurable-property-in' );
```

#### isNonConfigurablePropertyIn( value, property )

Returns a `boolean` indicating if a `value` has a non-configurable `property` (i.e., a property which cannot be deleted and whose descriptor cannot be changed).

<!-- eslint-disable no-restricted-syntax -->

```javascript
var defineProperty = require( '@stdlib/utils-define-property' );

var bool;
var obj;

function Foo() {
    this.foo = 'bar';
    return this;
}

defineProperty( Foo.prototype, 'beep', {
    'configurable': true,
    'enumerable': true,
    'writable': true,
    'value': true
});

defineProperty( Foo.prototype, 'boop', {
    'configurable': false,
    'enumerable': true,
    'writable': true,
    'value': true
});

obj = new Foo();

bool = isNonConfigurablePropertyIn( obj, 'foo' );
// returns false

bool = isNonConfigurablePropertyIn( obj, 'beep' );
// returns false

bool = isNonConfigurablePropertyIn( obj, 'boop' );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isNonConfigurablePropertyIn( 'beep', 'length' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    var defineProperty = require( '@stdlib/utils-define-property' );

    var obj = {};

    defineProperty( obj, 'null', {
        'configurable': false,
        'enumerable': true,
        'writable': true,
        'value': true
    });

    var bool = isNonConfigurablePropertyIn( obj, null );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, id-length -->

<!-- eslint no-undef: "error" -->

```javascript
var isNonConfigurablePropertyIn = require( '@stdlib/assert-is-nonconfigurable-property-in' );

var bool = isNonConfigurablePropertyIn( [ 'a' ], 'length' );
// returns true

bool = isNonConfigurablePropertyIn( {}, 'toString' );
// returns false

bool = isNonConfigurablePropertyIn( {}, 'hasOwnProperty' );
// returns false

bool = isNonConfigurablePropertyIn( { 'a': 'b' }, 'a' );
// returns false

bool = isNonConfigurablePropertyIn( [ 'a' ], 0 );
// returns false

bool = isNonConfigurablePropertyIn( { 'null': false }, null );
// returns false

bool = isNonConfigurablePropertyIn( { '[object Object]': false }, {} );
// returns false

bool = isNonConfigurablePropertyIn( null, 'a' );
// returns false

bool = isNonConfigurablePropertyIn( void 0, 'a' );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-configurable-property-in`][@stdlib/assert/is-configurable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is configurable.</span>
-   <span class="package-name">[`@stdlib/assert-is-enumerable-property-in`][@stdlib/assert/is-enumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is enumerable.</span>
-   <span class="package-name">[`@stdlib/assert-is-nonconfigurable-property`][@stdlib/assert/is-nonconfigurable-property]</span><span class="delimiter">: </span><span class="description">test if an object's own property is non-configurable.</span>
-   <span class="package-name">[`@stdlib/assert-is-nonenumerable-property-in`][@stdlib/assert/is-nonenumerable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is non-enumerable.</span>
-   <span class="package-name">[`@stdlib/assert-is-readable-property-in`][@stdlib/assert/is-readable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is readable.</span>
-   <span class="package-name">[`@stdlib/assert-is-writable-property-in`][@stdlib/assert/is-writable-property-in]</span><span class="delimiter">: </span><span class="description">test if an object's own or inherited property is writable.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-nonconfigurable-property-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-nonconfigurable-property-in

[test-image]: https://github.com/stdlib-js/assert-is-nonconfigurable-property-in/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-nonconfigurable-property-in/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-nonconfigurable-property-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-nonconfigurable-property-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-nonconfigurable-property-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-nonconfigurable-property-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-nonconfigurable-property-in/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-nonconfigurable-property-in/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-nonconfigurable-property-in/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-nonconfigurable-property-in/blob/main/branches.md

<!-- <related-links> -->

[@stdlib/assert/is-configurable-property-in]: https://github.com/stdlib-js/assert-is-configurable-property-in

[@stdlib/assert/is-enumerable-property-in]: https://github.com/stdlib-js/assert-is-enumerable-property-in

[@stdlib/assert/is-nonconfigurable-property]: https://github.com/stdlib-js/assert-is-nonconfigurable-property

[@stdlib/assert/is-nonenumerable-property-in]: https://github.com/stdlib-js/assert-is-nonenumerable-property-in

[@stdlib/assert/is-readable-property-in]: https://github.com/stdlib-js/assert-is-readable-property-in

[@stdlib/assert/is-writable-property-in]: https://github.com/stdlib-js/assert-is-writable-property-in

<!-- </related-links> -->

</section>

<!-- /.links -->
