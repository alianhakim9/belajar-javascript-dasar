function* generateName() {
  yield "Alian";
  yield "Ilyas";
  yield "Hanifah";
}

const names = generateName();

for (const name of names) {
  console.info(name);
}

console.info("==================");

function* buatGanjil(n) {
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      console.info(`value ${i}`); // lazy
      yield i;
    }
  }
}

function buatGanjilArray(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      console.info(`value ${i}`); // eager
      result.push(i);
    }
  }
  return result;
}

const angkaGanjil = buatGanjil(100);

// for (const number of angkaGanjil) {
//   console.info(number);
// }

console.info(angkaGanjil.next().value);
