// function sayHello(name) {
//   console.info(`Hello ${name}`);
// }

const person = {
  name: "Alian",
  sayHello: (name) => console.info(`Hello ${name}, my name is ${person.name}`),
  //   sayHello : sayHello
};

person.sayHello("Ilyas");
person.sayHello("Hanifah");

const schools = {
  name: "Politeknik TEDC Bandung",
};

schools.getName = () => console.info(schools.name);

schools.getName();
