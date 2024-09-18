/** Math : sebuah objek dalam javascrip yang berisi method/operasi matematika */

//Math.random() : buat menghasilkan angka acak/random
// contoh random angka 0-1
let randomNumber = Math.random();
console.log("math random : ", randomNumber);

// contoh random dari rentang anggka tertentu
let min = 5;
let max = 30;
let randonmize = Math.random() * (max - min + 1) + min;

console.log("Angka Acak antara 5 dan 30 : ", randonmize);

// Math.floor() : buat ngebulatin angka kebawah
let angkaBulatKebawah = Math.floor(2.9);
console.log("math floor : ", angkaBulatKebawah);

// Math.ceil() : buat ngebulatin angka keatas
let angkaBulatKeatas = Math.ceil(2.9);
console.log("math floor : ", angkaBulatKeatas);

// math.round() : buat  buletin angka terdekat
let angkaBulat = Math.round(4.5);
console.log("Math Round :", angkaBulat);

// Math.max (parameter) : buat mencari nilai maximum dari beberapa angka
let nilaiMax = Math.max(2, 5, 9, 1);
console.log("math min :", nilaiMax);

// Math.min (parameter) : buat mencari nilai minimum dari beberapa angka
let nilaiMin = Math.min(2, 5, 9, 1);
console.log("math min :", nilaiMin);

//Math.sqrt() : untuk menghitung akar kuadrat
let akarKuadrat = Math.sqrt(16);
console.log("Math sqrt :", akarKuadrat);

// Math.pow(angka,pangkat) : buat menghitung pangkat
let hasilPangkat = Math.pow(2, 3);
console.log("Math pow : ", hasilPangkat);

//Math.PI : untuk ngecek nilai pi
console.log("Math PI : ", Math.PI);
