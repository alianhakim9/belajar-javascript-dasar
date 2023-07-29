const createAdder = (value) => {
  const owner = "Ali";
  const add = (param) => {
    console.info(owner);
    return value + param;
  };
  return add;
};

const addTwo = createAdder(2);
const addTen = createAdder(10);

console.info(addTwo(2));
console.info(addTen(10));
