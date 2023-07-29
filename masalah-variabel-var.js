// menggunakan let
// global scope
let i = 20;

for (let i = 0; i < 10; i++) {
  // local scope
  console.info(`Local ${i}`);
}

console.info(`Global ${i}`); // 20

// menggunakan var

// var i = 20;

// for (var i = 0; i < 10; i++) {
//   // local scope
//   console.info(`Local ${i}`);
// }

// console.info(`Global ${i}`); // 10
