/**if else : logic untuk memilih salah satu atau beberapa kondisi sekaligus */

// if
let nilaiSiswa = 100;
if (nilaiSiswa === 1000){
    console.log("selamat anda mendapatkan nilai sempurna!");
}

// if else

const bootcampStatus = "active";
if (bootcampStatus === "active"){
console.log("Bootcamp Masuk");
}else {
    console.log("Bootcamp Libur");
}

// if else if

const classStatus = "close";
const minuteRemaining = 5;
if(classStatus === "open"){
    console.log("kelas bootcamp sedang berjalan");  
} else if (minuteRemaining <=  5){
    console.log("kelas bootcamp tersisa 5 menit lagi");  
} else {
    console.log("kelas bootcamp telah berakhir");
    
}


// nested if (kondisi bersarang)
const nilai = 92;
if(nilai >= 70){
    if(nilai >= 90 ){
        console.log("Nilai A");    
    } else {
        console.log("Nilai B");
    }    
} else {
    console.log("Nilai C");
    
}

// Ternary Operator
const statusSiswa = "siswa"
let hasil = nilai >= 70 &&  statusSiswa === "siswa"? "lulus": "anda bukan siswaa";
console.log("hasil :", hasil);

const result  = nilai >= 90 ? "A" : nilai >= 80 ? "B" : nilai >=70 ? "C":"D";


