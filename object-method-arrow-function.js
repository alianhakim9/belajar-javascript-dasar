const person = {
  name: "Alian",
  // tidak bisa menggunakan kata kunci this yang mengacu kepada person
  sayHello: (name) => {
    console.info(`Hello ${name}`);
  },
};

person.sayHello("Ilyas");
