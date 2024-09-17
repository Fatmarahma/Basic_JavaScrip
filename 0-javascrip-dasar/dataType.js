/**DATA TYPE (Tipe Data)
 * Tipe data adalah jenis-jenis  nilai yang dapat disimpan  dalam suatu variabel
 * Tipe data terbagi dua,tipe data primitif sama non-primitif
 * - tipe primitif = tipe data simplee/sederhana yang cuma punya 1 nilai
 * - non primitif : tipe data kompleks yang mempunyai lebih dari 1 nila. exp: array
 */

// Tipe data String (data yang ada kutipnya)
let mobil = "wuling";

// Integer : tipe data khusus angka
let nomor = 123;

// Boolean : buat nentuin nilai benar (true) atau salah (false)
const isFlying = false;

// array :untuk menyimpan lebih dari 1 data
const buah = ["durian", "apel", "mangga"];
console.log("buah-buahan :", buah);

// Object : templete Data
const employee = {
  nama: "danu",
  umur: 90,
  jobDesk: "palugada",
  salary: 4500000,
};
console.log("karyawan :", employee);

// nul : buat nambahin ketika data kosong
let duit = null;

// undefined: buat nandain  kalau data ini belum di kasih nilai / isi
let job;

let nomorString = "123";
console.log(parseInt(nomorString)); //untuk mengubah string ke integer
console.log(nomor.toString()); // untuk mengubah integer ke string
console.log(JSON.stringify(employee)); // mengubah objek dari format bisa ke format JSON
// console.log( JSON.parse(employee)); untuk mengubah data JSON menjadi Object Biasa

// Funcion : untuk membuat fungsi atau tugas tertentu
function printAnyting() {
  console.log("mulyono");
}
printAnyting(); // untuk memanggil fungsinya

const whoIam = (name) => {
  return name;
};
console.log(whoIam("aku mulyono"));
