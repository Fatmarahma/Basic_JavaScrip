/** 1. 
 * buatlah logic switch case untuk menampilkan nama hari (pake bahasa inggris) bedasarkan input angka 1-7 
 * jika angka yang dimasukin di luar rentang tersebut, maka tampilin pesan  "input tidak valid" */ 

/**2 (if  else) 
 * buat logic untuk menentukan status kelulusan orang berdasarkan nilai yang di dapat
 * jika nilai lebih dari atau sama dengan 80, maka status lulusnya adalah "Lulus dengan sangat baik"
 * jika nilai lebih dari sama dengan 70 dan kurang dari 80,maka status lulusnya adalah "Lulus dengan baik"
 * jika nilai lebih dari sama dengan 60 dan kurang dari 70,maka ststus lulusnya adalah "Lulus tapi B aja" 
 * jika nilai kurang  dari 60, maka statusnya "tidak lulus"*/

/** 3
 * buat nested if untuk menentukan nilai rata2 siswa dengan menghitung nilai rata-rata dari 3 pelajaran (mtk, fisika, kimia)
 * jika nilai masing-masing pelajaran yang dimasukan tidak valid (diluar rentang 0-100), maka menampilkan pesan "Nilai tidak Valid"
 * jika nilai rata-rata lebih besar sama dengan 80 , maka tampilan pesan "Selamat,anda lulus dengan Baik!"
 * jika nilai rata-rata lebih kecil dari 80 dan lebih besar sama dengan 60,maka tampilan pesan "Anda Lulus"
 * jika nilai rata-rata lebih kecil dari 60,maka tampilan pesan "Anda tidak lulus"
 */

/** 4
 * buat nested if untuk menghitung total harga pembelian barang
 * jika total harga sama dengan 0 maka tampilannya pesan tidak valid
 * jika total pembelian melebihi atau sama dengan 1 juta , maka kasih diskon 10%
 *  sedangkan jika total pembelian lebih dari 500 ribu, maka kasih diskon 5%,jika kurang dari 500 ribu, maka tidak mendapatkan diskon.
 * lalu cek,
 * jika dapatt diskon maka tampilan pesan "Selamat ! anda mendapatkan diskon sebesar <diskon% total harga sebelum diskon : <totalHarga>
 * jika tidak dapet  diskon maka tampilannya pesan "Maaf, anda tidak mendapatkan diskon. Harga total adalah <hargaSetelahDiskon>"
 */

// 1.
console.log("====================Soal No 1==================");
let dayNumber = 7;
switch (dayNumber){
    case 1:
        console.log("Tuesday");
            break;
     case 2:
            console.log("Tuesday");
            break;
    case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Input tidak valid");
            break;
}

console.log("====================Soal No 2==================");
// 2
const nilai = 90;

const statusKelulusan = (nilai >= 80) ? "Lulus dengan sangat baik" :
               (nilai >= 70) ? "Lulus dengan baik" :
               (nilai >= 60) ? "Lulus tapi B aja" :
                               "Tidak lulus";

 console.log("Status Kelulusan : ",statusKelulusan );


  console.log("====================Soal No 3==================");
//  3
 const mtk = 85;
 const fisika = 90; 
 const kimia = 75;
 

 if (mtk <= 0 || mtk >= 100 || fisika <= 0 || fisika >= 100 || kimia <= 0 || kimia >= 100) {
     console.log("Nilai tidak Valid");
 } else {
     const rataRata = (mtk + fisika + kimia) / 3;
     console.log( "Nilai Kelulusan : ",
         rataRata >= 80 ? "Selamat, anda lulus dengan Baik!" :
         rataRata >= 60 ? "Anda Lulus" :
         "Anda tidak lulus"
);
 }


 console.log("====================Soal No 4==================");
 

// 4
const harga = 500000; 
if (harga === 0) {
    console.log("Pesan: Tidak valid");
} else {
    let diskon = 0;

    if (harga >= 1000000) {
        diskon = 10; 
    } else if (harga >= 500000) {
        diskon = 5; 
    }

    const hargaSetelahDiskon = harga * (1 - (diskon / 100));
    
    if (diskon >= 0) {
        
        console.log("Selamat! Anda mendapatkan diskon sebesar " + diskon + "%");
        console.log("Total harga sebelum diskon: " + harga);
        console.log("--------------------------------------------------");
        
        console.log("Harga setelah diskon: " + hargaSetelahDiskon);
    } else {
        console.log("Maaf, Anda tidak mendapatkan diskon.");
        console.log("Harga total adalah: " + hargaSetelahDiskon);
    }
}


