/**1
 * buat loopingan untuk menghasilkan bilangan ganjil antara 1 samapai 20
 */

/** 2
 *   buatlah sebuah fungsi untuk mencari nilai tertinggi dari sebuah array menggunakan for loop */
const array = [3,7,2,9,5,10]

/** 3 
 * buatlah looping menggunakan for untuk membentuk segitiga sama siku seperti dibawah ini 
 * 
 **
 ***
 ****
 *****
*/

/** buat fungsi untuk menghitung nilai rata-rata  dari sebuah data array menggunakan for loop */
const nilai = [3,7,2,9,5,10]

// 1.
let i = 1;
while (i <= 20) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
// for (let i = 1 ;i <= 20; i++){
// if(i%2 !== 0){ console.log(i);}}





// 2
let nilaiTertinggi = array [0];
for (let i = 1; i < array.length; i++) {
    if (array[i] > nilaiTertinggi) {
      nilaiTertinggi = array[i]; 
    }
  }
  
  console.log("Nilai Tertinggi : ",nilaiTertinggi)

//   3

let segitiga = [1, 2, 3, 4, 5]; 

for (let i = 0; i < segitiga.length; i++) {
    let garis = ""; 
    for (let j = 0; j < segitiga[i]; j++) {
        garis += "*"; 
    }
    console.log(garis); 
}

//   4

let jumlah = 0;
for (let i = 0; i < nilai.length;i++){
    jumlah += nilai[i];
}
let average = jumlah/nilai.length;
console.log("Nilai Rata-rata : ",average);

