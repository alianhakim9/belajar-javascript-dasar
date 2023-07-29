const person = {
  firstName: "Alian",
  lastName: "Hakim",
  age: 22,
};

// tanpa with statement
console.info(person.firstName);
console.info(person.lastName);
console.info(person.age);

// dengan with statement (tidak direkomendasikan lagi karena bisa bikin ambigu)
with (person) {
  console.info(firstName);
  console.info(lastName);
  console.info(age);
}
