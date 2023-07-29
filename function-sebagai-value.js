function sayHello(name) {
  document.writeln(`Hello ${name}`);
}
sayHello("Alian");
// menyimpan function ke dalam variable
const say = sayHello;
say("Ilyas");

// function sebagai parameter callback
function giveMeName(callback) {
  callback("Alinda");
}

giveMeName(sayHello);
giveMeName(say);
