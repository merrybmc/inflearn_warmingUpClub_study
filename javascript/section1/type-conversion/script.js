let val;

// Number to String
val = String(111); // "111"

// Boolean to String
val = String(false); // "false"

// Date to String
val = String(new Date()); // "Mon Apr 29 2024 16:26:!1"

// Array to String
val = String([1, 2, 3, 4, 5]); // 1, 2, 3, 4, 5

// toString()
val = (5).toString(); // "5"

// String to number
val = Number('1'); // 1
val = Number(true); // 1
val = Number(false); // 0
val = Number([1, 2, 3]); // NaN (Not a Number)

val = parseInt('111.40'); // 소수점 제거 111
val = parseFloat(111.4); // 소수점 미제거 111.40

const val1 = String(2); // "2"
const val2 = 3; // 3
const sum = val1 + val2; // "23" (string)
