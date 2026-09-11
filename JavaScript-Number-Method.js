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
