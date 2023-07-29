// arrow function tidak bisa mengakses this

// const sayHello = (name) => {
//   const say = `Hello ${name}`;
//   console.info(say);
// };

const sayHello = (name) => console.info(`Hello ${name}`);

sayHello("Alian");
sayHello("Hanifah");

// arrow function return value
const sum = (first, second) => first + second;

console.info(sum(100, 100));

// arrow function sebagai parameter
function giveMeName(callback) {
  callback("Alian");
}

giveMeName((name) => console.info(`Hello ${name}`));
