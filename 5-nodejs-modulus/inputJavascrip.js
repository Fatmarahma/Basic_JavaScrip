//import modul readline dari nodejs(untuk input/output)
const readline = require("readline");

const inputNama = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// contoh ambil 1 inputan
// inputNama.question("Masukan nama: ", (nama) => {
//   console.log("Halo", nama);
//   inputNama.close();
// });

//contoh ambil 2 inputan
inputNama.question("Masukan nama : ", (nama) => {
  inputNama.question("Masukan umur: ", (age) => {
    console.log("Halo,", nama, ", umur", age); //nampilin jawaban
    console.log(`Halo, ${nama} umur ${age}`);
    inputNama.close();
  });
});
