import assertType from '../src/assert-type'

/**
 * @param {string} str
 * @param {number} num
 * @param {null} nul
 * @param {number|string} strOrNum
 */
function example(str, num, nul, strOrNum) {
	// quite extensive, but now very simple type-checks.
	assertType(String, str)
	assertType(Number, num)
	assertType(null, nul)
	assertType([String, Number], strOrNum)

	// other code
	return 'Types are checked and OK'
}

const STRING = 'a'
const NUMBER = 1
const ARRAY = []

// NOTE: 'undefined' always passes type check

example()
//=> 'Types are checked and OK'

example(STRING, NUMBER, null, STRING)
//=> 'Types are checked and OK'

example(STRING, NUMBER, null, NUMBER)
//=> 'Types are checked and OK'

example(ARRAY, NUMBER, null, STRING)
//=> throws TypeError('Expected String, got Array')

example(STRING, ARRAY, null, STRING)
//=> throws TypeError('Expected Number, got Array')

example(STRING, NUMBER, ARRAY, STRING)
//=> throws TypeError('Expected Null, got Array')

example(STRING, NUMBER, null, ARRAY)
//=> throws TypeError('Expected String, Number, got Array')
