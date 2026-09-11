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
