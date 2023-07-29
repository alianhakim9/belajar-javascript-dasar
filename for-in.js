const person = {
  firstName: "Hanifah",
  middleName: "Indah",
  lastName: "Rahmawati",
};

for (const property in person) {
  // mengakses value object
  console.info(person[property]);
  //   mengakses properti object
  console.info(property);
}

const names = ["Hanifah", "Indah", "Alian"];

for (const index in names) {
  console.info(names[index]);
}
