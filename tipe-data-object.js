const person = {};

// menambah atau mengubah
person["name"] = "Alian Hakim";
person["age"] = 20;
person["region"] = "Indonesia";

console.table(person);

delete person["age"];
console.table(person);

// membuat object dengan properties

const orang = {
    nama: "Alian Hakim",
    umur: 20,
    negara: "Indonesia",
    "alamat rumah": "Jl. Ciwaruga No.53"
};

console.table(orang);

// mengakses properti object
console.info(`Nama : ${orang.nama}`);
console.info(`Umur : ${orang.umur}`);
console.info(`Negara : ${orang.negara}`);
console.info(`Alamat : ${orang["alamat rumah"]}`);