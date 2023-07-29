// contoh pembuatan anonymous function / function tanpa nama

// cara pertama
const say = function () {
  console.log("contoh anonymous function di variable");
};

// cara kedua memasukkan ke dalam parameter
function giveMeName(callback) {
  callback();
}

giveMeName(function (name) {
  console.log(`Hello ${name}`);
});

// memanggil function
say("Alian");
