// konversi string ke number
const value1 = parseInt("1");
const value2 = 1;

const sum = value1 + value2;
console.info(sum); // 2
console.info(parseInt("1.1")); // 1
console.info(parseFloat("1.1.")); // 1.1
console.info(Number("1.1")); // 1.1

// toString()
const a = 1;
const b = 1;
const total = a.toString() + b.toString();
console.info(total); // 11

// NaN (Not a Number)
console.info(parseInt("salah")); // NaN
console.info(parseInt("1salah")); // 1
console.info(parseFloat("1.1text")); // 1.1
console.info(Number("1salah")); // NaN

// operasi pada NaN
const first = Number("salah");
const totalNumber = first + 100;
console.info(totalNumber); // NaN

// isNaN function
console.log(isNaN(first)); // true
console.log(isNaN(100)); // false