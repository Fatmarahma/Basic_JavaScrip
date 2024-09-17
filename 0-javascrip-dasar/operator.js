const a = 100;
const b = 5;

const add = a + b;
console.log("penjumlahan :", add);
console.log("pengurangan :", a - b);
console.log("perkalian :", a * b);
console.log("pembagian :", a / b);
console.log("modulus :", a % b);
console.log("jumlah dan kali :", (a + b) * b);

// OPEERATOR PERBANDINGAN
console.log("===Equal==="); //sama dengan
console.log(a == 100); //true
console.log(a == 20); //false

let sifat = "rajin";
console.log("===Not Equal==="); //tidak sama dengan
console.log(sifat != "nakal"); //true
console.log(sifat != "Rajin"); //true

console.log("===Strict Equal==="); //sama dengan variabel dan tipe datanya
console.log(a === 100); //true
console.log(a === "100"); //false

console.log("===Strict Not Equal==="); //stidak ama dengan variabel dan tipe datanya
console.log(a !== "100"); //true
console.log(a !== 100); //false

console.log("===Kurang dari/Lebih dari/ sama dengan==="); //stidak ama dengan variabel dan tipe datanya
console.log(a < 100); //false
console.log(a > 100); //false
console.log(a <= 100); //true
console.log(a >= 100); //true

// Operator Kondisional OR (menghasilkan nilai true ketika ada salah satu nilai yang true)
console.log("true or true : ", true || true);
console.log("false or true : ", false || true);
console.log("false or false : ", false || false);
console.log("false or true or false :", false || true || true);
console.log("false or false : ", false || false);
console.log(true || false || true || false);

// Operator Kondisional AND (menghasilkan nilai true ketika ada salah satu nilai yang FALSE)
console.log("true and true : ", true && true); // true
console.log("false and true : ", false && true); // false
console.log("false and false : ", false && false); // false
console.log("false and true or false :", false && true && true); // false
console.log("false and false : ", false && false); // false
console.log(true && false && true && false); // false
