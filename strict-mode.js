function useStrictMode() {
  "use strict";

  const person = {
    firstName: "Alian",
    lastName: "Hakim",
  };

  // error
  //   with (person) {
  //     console.info(firstName);
  //   }
}
