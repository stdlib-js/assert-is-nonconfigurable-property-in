/** @license Apache-2.0 */

'use strict';

/**
* Test whether an object's own or inherited property is non-configurable.
*
* @module @stdlib/assert-is-nonconfigurable-property-in
*
* @example
* var defineProperty = require( '@stdlib/utils-define-property' );
* var isNonConfigurablePropertyIn = require( '@stdlib/assert-is-nonconfigurable-property-in' );
*
* var obj = {
*     'boop': true
* };
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': true,
*     'writable': true,
*     'value': true
* });
*
* var bool = isNonConfigurablePropertyIn( obj, 'boop' );
* // returns false
*
* bool = isNonConfigurablePropertyIn( obj, 'beep' );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
