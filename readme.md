# @bemoje/assert-type

Perform easy type-checks with a simple type assertion.

#### Version

<span><a href="https://npmjs.org/@bemoje/assert-type" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/assert-type" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/assert-type" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-assert-type.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/assert-type" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-assert-type.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/assert-type" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/assert-type" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-assert-type/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-assert-type" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/assert-type
npm install --save @bemoje/assert-type
npm install --save-dev @bemoje/assert-type
```

## Usage

```javascript
import assertType from '@bemoje/assert-type'

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

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### assertType

Perform easy type-checks with a simple type assertion.

##### Parameters

-   `constructors` **([function][3] | null | [Array][4]&lt;([function][3] | null)>)** The expected type's constructor(s). Also accepted as a "constructor" is the null value.

-   `value` **any** The value to evaluate

##### Returns
**void** 

[1]: #asserttype

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array