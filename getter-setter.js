const person = {
  firstName: "Alian",
  lastName: "Hakim",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    console.info("Ubah full name");
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

console.table(person);
person.fullName = "Ilyas Yasin";
console.table(person);
