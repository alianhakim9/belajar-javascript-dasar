const person = {
  name: "Alian",
  sayHello: function (name) {
    console.info(`Hello ${name}, my name is ${this.name}`);
  },
};

person.sayHello("Ilyas");
