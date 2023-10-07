/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var zeros = require( '@stdlib/ndarray-zeros' );
var strides = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strides, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a zero-dimensional ndarray, the function returns a single-element array', function test( t ) {
	t.deepEqual( strides( zeros( [] ), false ), [ 0 ], 'returns expected value' );
	t.end();
});

tape( 'the function returns the strides of an ndarray', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		zeros( [ 3, 3, 3 ] ),
		zeros( [ 1, 1 ] ),
		zeros( [ 3, 3, 0, 3 ] ),
		zeros( [ 1, 2, 3, 4 ] ),
		zeros( [ 5 ] )
	];

	expected = [
		values[ 0 ].strides,
		values[ 1 ].strides,
		values[ 2 ].strides,
		values[ 3 ].strides,
		values[ 4 ].strides
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ], false );
		t.deepEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});

tape( 'the function accepts minimal ndarray-like objects (strides)', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'strides': [ 9, 3, 1 ]
		},
		{
			'strides': [ 1, 1 ]
		},
		{
			'strides': [ 0, 0, 3, 1 ]
		},
		{
			'strides': [ 1, 1, 2, 6 ]
		},
		{
			'strides': [ 5 ]
		}
	];

	expected = [
		values[ 0 ].strides,
		values[ 1 ].strides,
		values[ 2 ].strides,
		values[ 3 ].strides,
		values[ 4 ].strides
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ], false );
		t.deepEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});

tape( 'the function supports returning a guaranteed copy of an input ndarray strides', function test( t ) {
	var expected;
	var values;
	var out;
	var i;

	values = [
		{
			'strides': [ 9, 3, 1 ]
		},
		{
			'strides': [ 1, 1 ]
		},
		{
			'strides': [ 0, 0, 3, 1 ]
		},
		{
			'strides': [ 1, 1, 2, 6 ]
		},
		{
			'strides': [ 5 ]
		}
	];

	expected = [
		values[ 0 ].strides,
		values[ 1 ].strides,
		values[ 2 ].strides,
		values[ 3 ].strides,
		values[ 4 ].strides
	];

	for ( i = 0; i < values.length; i++ ) {
		out = strides( values[ i ], true );
		t.notEqual( out, values[ i ].strides, 'returns expected value' );
		t.deepEqual( out, expected[ i ], 'returns expected value for strides '+values[ i ].strides.join( 'x' ) );
	}
	t.end();
});
