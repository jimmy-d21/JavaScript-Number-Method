// .toFixed(n): Formats number to 'n' decimal places; returns a STRING (rounds automatically)

// 1. Basic decimal truncation
(3.14159).toFixed(2); // Output: "3.14"

// 2. Automatic rounding up
(19.9876).toFixed(2); // Output: "19.99"

// 3. Adding trailing zeros for currency display
(50).toFixed(2); // Output: "50.00"

// 4. Whole integer rounding
(123.456).toFixed(0); // Output: "123"

// 5. Handling zero-valued floats
(0.0007).toFixed(3); // Output: "0.001"

// .toString(radix): Converts number to string; pass radix (2-36) for base conversion

// 1. Basic conversion to string (Base 10)
(255).toString(); // Output: "255"

// 2. Convert integer to Binary (Base 2)
(10).toString(2); // Output: "1010"

// 3. Convert integer to Hexadecimal (Base 16)
(255).toString(16); // Output: "ff"

// 4. Convert integer to Octal (Base 8)
(8).toString(8); // Output: "10"

// 5. Convert negative numbers to string
(-42).toString(); // Output: "-42"

// .valueOf(): Unwraps a Number object to its primitive numeric value

// 1. Unwrapping explicit Number object
new Number(42).valueOf(); // Output: 42

// 2. ValueOf on primitive number return primitive value
(100).valueOf(); // Output: 100

// 3. Implicit execution during mathematical operations
new Number(10) + 5; // Output: 15

// 4. Unwrapping floating-point Number object
new Number(3.14).valueOf(); // Output: 3.14

// 5. Comparing primitive value against wrapper instance
new Number(5).valueOf() === 5; // Output: true

// Number.parseInt(str, radix): Extracts whole integer from string start; always specify radix (10)

// 1. Basic string parsing (Base 10)
Number.parseInt("42", 10); // Output: 42

// 2. Stripping non-numeric trailing units (e.g., CSS dimensions)
Number.parseInt("100px", 10); // Output: 100

// 3. Truncating floating-point numbers in string form
Number.parseInt("19.99", 10); // Output: 19

// 4. Parsing binary strings (Base 2)
Number.parseInt("1101", 2); // Output: 13

// 5. Handling invalid leading text
Number.parseInt("abc123", 10); // Output: NaN

// Number.parseFloat(str): Extracts floating-point decimal from the start of a string

// 1. Basic decimal parsing
Number.parseFloat("3.14159"); // Output: 3.14159

// 2. Parsing string with units
Number.parseFloat("2.5em"); // Output: 2.5

// 3. Ignoring leading whitespace
Number.parseFloat("   12.34   "); // Output: 12.34

// 4. Extracting from scientific notation strings
Number.parseFloat("4.5e-3"); // Output: 0.0045

// 5. Stopping at invalid characters
Number.parseFloat("314.15abc99"); // Output: 314.15

// Number.isNaN(val): Strict check for NaN value without type coercion (safer than global isNaN)

// 1. True NaN validation
Number.isNaN(NaN); // Output: true

// 2. Result of mathematically impossible operations
Number.isNaN(0 / 0); // Output: true

// 3. String input handling (does NOT coerce, unlike global isNaN)
Number.isNaN("hello"); // Output: false

// 4. Undefined handling
Number.isNaN(undefined); // Output: false

// 5. Valid number handling
Number.isNaN(123); // Output: false

// Number.isFinite(val): Checks if value is a real, non-infinite number without coercion

// 1. Valid finite number check
Number.isFinite(100); // Output: true

// 2. Infinity check
Number.isFinite(Infinity); // Output: false

// 3. Division by zero outcome check
Number.isFinite(10 / 0); // Output: false

// 4. Strict check prevents string coercion
Number.isFinite("100"); // Output: false

// 5. Checking NaN
Number.isFinite(NaN); // Output: false

// Number.isInteger(val): Returns true if value is a finite whole number

// 1. Whole integer check
Number.isInteger(42); // Output: true

// 2. Float check
Number.isInteger(42.5); // Output: false

// 3. Float representation of an integer
Number.isInteger(42.0); // Output: true

// 4. Checking float precision boundary
Number.isInteger(0.0000000000000001); // Output: false

// 5. Non-numeric parameter check
Number.isInteger("42"); // Output: false

// .toPrecision(n): Formats number to 'n' TOTAL significant digits (returns a string)

// 1. Basic significant digits formatting
(123.4567).toPrecision(4); // Output: "123.5"

// 2. Padding with zeros when precision exceeds digits
(5.1).toPrecision(4); // Output: "5.100"

// 3. Rounding small decimals
(0.00012345).toPrecision(2); // Output: "0.00012"

// 4. Converting large numbers to scientific format when precision is small
(123456).toPrecision(2); // Output: "1.2e+5"

// 5. Preserving single significant digit
(9.99).toPrecision(1); // Output: "1e+1"

// Number.isSafeInteger(val): Checks if integer fits within safe IEEE 754 precision limits (-(2^53-1) to 2^53-1)

// 1. Safe max integer check
Number.isSafeInteger(9007199254740991); // Output: true

// 2. Unsafe max integer check (exceeds precision limits)
Number.isSafeInteger(9007199254740992); // Output: false

// 3. Safe negative integer check
Number.isSafeInteger(-100000); // Output: true

// 4. Float numbers are not safe integers
Number.isSafeInteger(10.5); // Output: false

// 5. Non-number types return false
Number.isSafeInteger("9007199254740991"); // Output: false

// Number.EPSILON: Smallest float step; use to compare floating-point equality safely

// 1. EPSILON constant value inspect
Number.EPSILON; // Output: 2.220446049250313e-16

// 2. The standard floating-point precision issue
0.1 + 0.2 === 0.3; // Output: false

// 3. Solving floating-point precision check with EPSILON
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON; // Output: true

// 4. Custom float equality helper
const floatEquals = (a, b) => Math.abs(a - b) < Number.EPSILON;
floatEquals(0.1 + 0.7, 0.8); // Output: true

// 5. Handling subtraction floating anomalies
floatEquals(1.0 - 0.9, 0.1); // Output: true

// .toLocaleString(locale, options): Formats number with localized separators, currencies, and percentages

// 1. Localized thousands separators (US English)
(1234567.89).toLocaleString("en-US"); // Output: "1,234,567.89"

// 2. Localized currency formatting (US Dollars)
(1234.56).toLocaleString("en-US", { style: "currency", currency: "USD" });
// Output: "$1,234.56"

// 3. Localized currency formatting (Euro in Germany)
(1234.56).toLocaleString("de-DE", { style: "currency", currency: "EUR" });
// Output: "1.234,56 €"

// 4. Formatting as percentages
(0.85).toLocaleString("en-US", { style: "percent" }); // Output: "85%"

// 5. Unit formatting
(50).toLocaleString("en-US", { style: "unit", unit: "mile-per-hour" });
// Output: "50 mph"

// .toExponential(digits): Formats number into scientific exponential notation string

// 1. Basic conversion to exponential string
(123456).toExponential(); // Output: "1.23456e+5"
