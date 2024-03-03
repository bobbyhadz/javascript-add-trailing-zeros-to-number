// EXAMPLE 1 - Add trailing Zeros to a Number in JavaScript

function addTrailingZeros(num, totalLength) {
  return String(num).padEnd(totalLength, '0');
}

console.log(addTrailingZeros(1.1, 5)); // 👉️ "1.100"
console.log(addTrailingZeros(-1.5, 5)); // 👉️ "-1.50"
console.log(addTrailingZeros(1, 2)); // 👉️ "10"

// // ----------------------------------------------

// // 👇️ Alternatively, just use the addition (+) operator
// const num = 5.3 + '00'; // 👉️ "5.300"
// console.log(num);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add trailing zeros to a number using the addition (+) operator

// console.log(5.5 + '00'); // 👉️ 5.500
// console.log(-5.5 + '00'); // 👉️ -5.500

// ------------------------------------------------------------------

// // EXAMPLE 3 - Defining a reusable function

// function addTrailingZeros(num, n) {
//   const char = '0';

//   return num + char.repeat(n);
// }

// console.log(addTrailingZeros(1.1, 5)); // 👉️ "1.100000"
// console.log(addTrailingZeros(1.1, 4)); // 👉️ "1.10000"
// console.log(addTrailingZeros(1.1, 3)); // 👉️ "1.1000"

// ------------------------------------------------------------------

// // EXAMPLE 4 - Add trailing zeros to a number using `Number.toFixed()`

// function addTrailingZeros(num, decimals) {
//   return num.toFixed(decimals);
// }

// console.log(addTrailingZeros(1.1, 5)); // 👉️ "1.10000"
// console.log(addTrailingZeros(1.1, 4)); // 👉️ "1.1000"
// console.log(addTrailingZeros(1.1, 3)); // 👉️ "1.100"

// ------------------------------------------------------------------

// // EXAMPLE 5 - Add trailing zeros to a number using Intl.NumberFormat

// const numFormat = new Intl.NumberFormat('en-US', {
//   minimumFractionDigits: 3,
// });

// console.log(numFormat.format(1)); // 👉️ 1.000

// console.log(numFormat.format(1.1)); // 👉️ 1.100

// console.log(numFormat.format(1.12)); // 👉️ 1.120
