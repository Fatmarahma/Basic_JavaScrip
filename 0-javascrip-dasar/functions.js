function penjumlahan (a,b) {
    return a +  b;
}
console.log(penjumlahan(10,5));

const cekAngkaPositif = (angka)=>{
if (angka < 0){
    return "Angka Negatif";
}
return "Angka Positif";
};
console.log(cekAngkaPositif(-10));
console.log(cekAngkaPositif(10));

function cekKaryawanAigen(nama,jobDesk,salary) {
    if (nama && jobDesk && salary){
        return "Anda Karyawan terdaftar"
    }
    return "Anda tidak terdaftar karyawan"
}
    console.log(cekKaryawanAigen("danu","palugada",1000));  
    console.log(cekKaryawanAigen("danu","palugada"));

    function cekKaryawan(nama,jobDesk,salary) {
        if (nama || jobDesk || salary) {
            return "Anda Karyawan terdaftar"
        }
        return "Anda tidak terdaftar karyawan"
    }
    
console.log(cekKaryawan("danu","palugada"));
console.log(cekKaryawan());

/** buat fungsi simple untuk menentukan apakah karyawan memenuhi syarat untuk mendapatkan BPJS
 * syaratnya : kerjanya sudah lebih dari setahun, 
 * sudah punya kartu BPJS dan 
 * gajinya dibaawah 2.500.000
 * Jika salah satu tidak terpenuhi maka tamoilan output "Anda belum memenuhi syarat BPJS"
 */

function CekBPJS(nama,lamaBekerja,memilikiKartu,salary) {
    if (nama && lamaBekerja > 12 && memilikiKartu && salary < 2500000){
        return "Anda Sudah Memenuhi Syarat BPJS"
    }
    return "Anda Belum Memenuhi Syarat BPJS"
}
console.log(CekBPJS("danu",30,"memeliki kartu",2000000));
console.log(CekBPJS("fatma",2));

function karyawanBpjs(nama,lamaBekerja,memilikiKartu,salary) {
    if (nama || lamaBekerja || memilikiKartu || salary) {
         return "Anda Sudah Memenuhi Syarat BPJS"
    }
      return "Anda Belum Memenuhi Syarat BPJS"
}

console.log(karyawanBpjs("danu",2,"memiliki kartu",4000000));

function findUserCountry(user){

    // return (user.address && user.address.country) || "Country not found";
    const country  = user && user.address && user.address.country;
    return country || "Country not found"
}

let user1 = {
    name : "Puan  Maharani",age: 25,
    address:  {
        city: "Tangerang",country:"Indonesia",
    },
};
let user2 = {
    name:"Mega Chan", age: 30,
};

console.log(findUserCountry(user1));
console.log(findUserCountry(user2));

