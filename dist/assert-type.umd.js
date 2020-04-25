(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-array'), require('@bemoje/is-node'), require('@bemoje/is-null'), require('@bemoje/is-type'), require('@bemoje/is-undefined'), require('@bemoje/throw-type-error')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-array', '@bemoje/is-node', '@bemoje/is-null', '@bemoje/is-type', '@bemoje/is-undefined', '@bemoje/throw-type-error'], factory) :
	(global = global || self, global['assert-type'] = factory(global.isArray, global.isNode, global.isNull, global.isType, global.isUndefined, global.throwTypeError));
}(this, (function (isArray, isNode, isNull, isType, isUndefined, throwTypeError) { 'use strict';

	isArray = isArray && Object.prototype.hasOwnProperty.call(isArray, 'default') ? isArray['default'] : isArray;
	isNode = isNode && Object.prototype.hasOwnProperty.call(isNode, 'default') ? isNode['default'] : isNode;
	isNull = isNull && Object.prototype.hasOwnProperty.call(isNull, 'default') ? isNull['default'] : isNull;
	isType = isType && Object.prototype.hasOwnProperty.call(isType, 'default') ? isType['default'] : isType;
	isUndefined = isUndefined && Object.prototype.hasOwnProperty.call(isUndefined, 'default') ? isUndefined['default'] : isUndefined;
	throwTypeError = throwTypeError && Object.prototype.hasOwnProperty.call(throwTypeError, 'default') ? throwTypeError['default'] : throwTypeError;

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

	return assertType;

})));
