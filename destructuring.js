{
  // membongkar value dalam array / object
  const names = ["Alian", "Ilyas", "Hanifah", "Alinda", "Fayola"];

  // mengambil data array secara manual
  const name1 = names[0];
  const name2 = names[1];
  const name3 = names[2];

  console.info(name1);
  console.info(name2);
  console.info(name3);

  console.info("=========== DESCTRUCTURING ARRAY ==========");

  // mengambil data array menggunakan destructuring
  const [person1, person2, person3, ...others] = names;
  console.info(person1);
  console.info(person2);
  console.info(person3);
  others.forEach((person) => {
    console.info(person);
  });
}

{
  // desctructing object

  console.info("=========== DESCTRUCTURING OBJECT ==========");

  const person = {
    firstName: "Alian",
    lastName: "Hakim",
    address: {
      street: "Jl. belum jadi",
      city: "Bandung",
      country: "Indonesia",
    },
    hobby: "Game",
    channel: "AlianHakimID",
  };

  const {
    firstName,
    lastName,
    address: { country, city, street },
    ...others
  } = person;
  console.info(firstName);
  console.info(lastName);
  console.info(country);
  console.info(city);
  console.info(street);
  console.info(others);
}

{
  console.info("=========== DESCTRUCTURING FUNCTION PARAM OBJECT ==========");

  // Desctructing function parameter
  function displayPerson({ firstName, middleName, lastName }) {
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
  }

  const person = {
    firstName: "Hanifah",
    middleName: "Indah",
    lastName: "Rahmawati",
  };

  displayPerson(person);
}

{
  console.info("=========== DESCTRUCTURING FUNCTION PARAM ARRAY ==========");

  // Desctructing function parameter
  function sum([first, second]) {
    return first + second;
  }

  console.info(sum([10, 20]));
}

{
  console.info("=========== DESCTRUCTURING DEFAULT VALUE ==========");
  const names = ["Hanifah", "Indah", "Rahmawati"];
  const [firstName, lastName, middleName = ""] = names;
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

{
  const person = {
    firstName: "Alian",
    lastName: "Hakim",
    address: {
      street: "Jl. belum jadi",
      city: "Bandung",
      country: "Indonesia",
    },
    hobby: "Game",
    channel: "AlianHakimID",
  };

  let { firstName: namaDepan, lastName: namaBelakang } = person;
  console.info(namaDepan);
  console.info(namaBelakang);
}
