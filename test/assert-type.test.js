import expectedGot from '@bemoje/expected-got'
import assertType from '../src/assert-type'

/**
 * @param {string} str
 * @param {number} num
 * @param {null} nul
 * @param {number|string} strOrNum
 */
function example(str, num, nul, strOrNum) {
	assertType(String, str)
	assertType(Number, num)
	assertType(null, nul)
	assertType([String, Number], strOrNum)
}

const STRING = 'a'
const NUMBER = 1
const ARRAY = []

describe('assertType', () => {
	test('works', () => {
		expect(() => example()).not.toThrow()
		expect(() => example(STRING, NUMBER, null, STRING)).not.toThrow()
		expect(() => example(STRING, NUMBER, null, NUMBER)).not.toThrow()

		expect(() => example(ARRAY, NUMBER, null, STRING)).toThrow(
			TypeError(expectedGot(String, ARRAY)),
		)
		expect(() => example(STRING, ARRAY, null, STRING)).toThrow(
			TypeError(expectedGot(Number, ARRAY)),
		)
		expect(() => example(STRING, NUMBER, ARRAY, STRING)).toThrow(
			TypeError(expectedGot(class Null {}, ARRAY)),
		)
		expect(() => example(STRING, NUMBER, null, ARRAY)).toThrow(
			TypeError(expectedGot([String, Number], ARRAY)),
		)
	})
})
