import isArray from '@bemoje/is-array';
import isNode from '@bemoje/is-node';
import isNull from '@bemoje/is-null';
import isType from '@bemoje/is-type';
import isUndefined from '@bemoje/is-undefined';
import throwTypeError from '@bemoje/throw-type-error';

class Null {}

/**
 * Perform easy type-checks with a simple type assertion.
 * @param {function|null|Array<function|null>} constructors - The expected type's constructor(s). Also accepted as a "constructor" is the null value.
 * @param {*} value - The value to evaluate
 * @returns {void}
 */
function assertType(constructors, value) {
	// do nothing if the current process is not a node.js process.
	if (isNode) {
		// undefined always evaluates as correct assertion
		if (isUndefined(value)) {
			return
		}

		if (isNull(value)) {
			value = new Null();
		}

		// check value against a single constructor type
		if (!isArray(constructors)) {
			// handle if null
			if (isNull(constructors)) {
				constructors = Null;
			}

			// check type
			if (isType(constructors, value)) {
				return
			}
		} else {
			// check value against multiple constructor types
			for (let i = 0, len = constructors.length; i < len; i++) {
				// handle if null
				if (isNull(constructors[i])) {
					constructors[i] = Null;
				}

				// check type
				if (isType(constructors[i], value)) {
					return
				}
			}
		}

		// no matches
		throwTypeError(constructors, value);
	}
}

export default assertType;
