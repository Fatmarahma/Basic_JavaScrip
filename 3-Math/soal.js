/**hitung luas lingkaran menggunakan Math */
let Lingkaran = 8;
let luasLingkaran = Math.PI * Math.pow(Lingkaran, 4);
console.log("Luas Lingkaran:", luasLingkaran);

/** cari nilai tertinggi dari 5 siswa menggunakan math */

let nilaiSiswa = [85, 92, 78, 90, 88];
let nilaiTertinggi = Math.max(...nilaiSiswa);
console.log("Nilai Tertinggi dari 5 siswa:", nilaiTertinggi);

/**buat perhitungan harga barang yang di diskon dan bulatkan kebawah hasilya */
let hargaBarang = 9000;
let persentaseDiskon = 30;

let hargaSetelahDiskon = hargaBarang * (1 - persentaseDiskon / 100);
let hargaBulat = Math.floor(hargaSetelahDiskon);
console.log("Harga setelah diskon :", hargaBulat);

/** cari selisih gaji karyawan tertinggii dan gaji terendah pake Math */
const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 12000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 2,
    nama: "Dinda",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 3,
    nama: "Fatma",
    age: 27,
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 4,
    nama: "Akmal",
    age: 28,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca"],
  },
];

// let gaji = employee.map((emp) => emp.jobDesk[0].salary);
// let gajiTertinggi = Math.max(gaji);
// let gajiTerendah = Math.min(gaji);
// let selisihGaji = gajiTertinggi - gajiTerendah;



// console.log("Selisih gaji :", selisihGaji);

function cariSelisihGaji(a) {
  let gajiTertinggi = Math.max(
    a
      .map((item) => item.jobDesk[0].salary)
      .reduce((acc, current) => {
        return current > acc ? current : acc;
      })
  );
  let gajiTerendah = Math.min(
    a
      .map((item) => item.jobDesk[0].salary)
      .reduce((acc, current) => {
        return acc < current ? acc : current;
      })
  );
  console.log(gajiTerendah);
  console.log(gajiTertinggi);

  return gajiTertinggi - gajiTerendah;
}

console.log(cariSelisihGaji(employee));
