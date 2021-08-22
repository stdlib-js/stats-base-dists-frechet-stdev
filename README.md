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

# Standard Deviation

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Fréchet][frechet-distribution] distribution [standard deviation][standard-deviation].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [standard deviation][standard-deviation] for a [Fréchet][frechet-distribution] random variable shape `α > 0`, scale `s > 0`, and location parameter `m` is

<!-- <equation class="equation" label="eq:frechet_stdev" align="center" raw="\sigma = \begin{cases} s \sqrt{ \Gamma \left(1-{\frac{2}{\alpha }}\right)-\left(\Gamma\left(1-{\frac {1}{\alpha }}\right)\right)^{2} } & {\text {for }}\alpha > 2\\\ \infty & \text{ otherwise } \end{cases}" alt="Standard deviation for a Fréchet distribution."> -->

<div class="equation" align="center" data-raw-text="\sigma = \begin{cases} s \sqrt{ \Gamma \left(1-{\frac{2}{\alpha }}\right)-\left(\Gamma\left(1-{\frac {1}{\alpha }}\right)\right)^{2} } &amp; {\text {for }}\alpha &gt; 2\\\ \infty &amp; \text{ otherwise } \end{cases}" data-equation="eq:frechet_stdev">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/frechet/stdev/docs/img/equation_frechet_stdev.svg" alt="Standard deviation for a Fréchet distribution.">
    <br>
</div>

<!-- </equation> -->

where `Γ` is the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-frechet-stdev
```

</section>

<section class="usage">

## Usage

```javascript
var stdev = require( '@stdlib/stats-base-dists-frechet-stdev' );
```

#### stdev( alpha, s, m )

Returns the [standard deviation][standard-deviation] for a [Fréchet][frechet-distribution] distribution with shape `alpha > 0`, scale `s > 0`, and location parameter `m`.

```javascript
var y = stdev( 3.0, 1.0, 1.0 );
// returns ~0.919

y = stdev( 3.0, 2.0, -3.0 );
// returns ~1.839

y = stdev( 5.0, 1.0, 2.0 );
// returns ~0.366
```

If `0 < alpha <= 2.0`, the function returns `+Infinity`.

```javascript
var y = stdev( 1.0, 1.0, 1.0 );
// returns Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = stdev( NaN, 1.0, -2.0 );
// returns NaN

y = stdev( 1.0, NaN, -2.0 );
// returns NaN

y = stdev( 1.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = stdev( 0.0, 3.0, 2.0 );
// returns NaN

y = stdev( 0.0, -1.0, 2.0 );
// returns NaN
```

If provided `s <= 0`, the function returns `NaN`.

```javascript
var y = stdev( 1.0, 0.0, 2.0 );
// returns NaN

y = stdev( 1.0, -1.0, 2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var stdev = require( '@stdlib/stats-base-dists-frechet-stdev' );

var alpha;
var m;
var s;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    alpha = ( randu()*20.0 ) + EPS;
    s = ( randu()*20.0 ) + EPS;
    m = ( randu()*20.0 ) - 40.0;
    y = stdev( alpha, s, m );
    console.log( 'α: %d, s: %d, m: %d, SD(X;α,s,m): %d', alpha.toFixed( 4 ), s.toFixed( 4 ), m.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-frechet-stdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-frechet-stdev

[test-image]: https://github.com/stdlib-js/stats-base-dists-frechet-stdev/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-frechet-stdev/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-frechet-stdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-frechet-stdev?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-frechet-stdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-frechet-stdev/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-frechet-stdev/main/LICENSE

[frechet-distribution]: https://en.wikipedia.org/wiki/Fr%C3%A9chet_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

</section>

<!-- /.links -->
