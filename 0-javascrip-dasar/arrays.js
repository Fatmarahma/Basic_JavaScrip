/** Array : tipe data yang bisa menyimpan banyak data sekaligus ,
 *  baik dengan satu jenis tipe data, atau tipe data campuran */

const array = [1, 2, 3, 4, 5];

/**Cara mengambil data tertentu dari array dengan cara berikut :
 * array : pangil variabelnya
 * [n] : masukan nilai indeksnya
 */

array[4] = 10; // mengganti nilai data dari dalam array
console.log(array);
console.log(array[2]); // mengambil daa indeks tertentu

//push () : menambahkan elemen baru ke dalam array (di akhir):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.push("kiwi");
console.log(fruits); // cek array yang udah ditambaahin data

//.unshift(): menambahkan elemen baru ke dalam array (di awal), dan "membatalkan pergeseran" elemen lama:
fruits.unshift("Lemon");
console.log(fruits);

// .shift() :Metode ini shift()menghapus elemen array pertama dan "menggeser" semua elemen lainnya ke indeks yang lebih rendah.
// fruits.shift();
console.log("data dishift:", array.shift());
console.log(array);
console.log("data dishift: ", fruits.shift());
console.log(fruits);

// .pop : Metode ini pop()menghapus elemen terakhir dari sebuah array
console.log("data dipop:", array.pop());
console.log(array);
console.log("data dipop: ", fruits.pop());
console.log(fruits);

// .splice() :Metode ini splice()dapat digunakan untuk menambahkan item baru ke dalam array:
/**Parameter pertama (0) mendefinisikan posisi di mana elemen baru harus ditambahkan (disambung).
Parameter kedua (1) mendefinisikan berapa banyak elemen yang harus dihapus .
Parameter lainnya dihilangkan. Tidak ada elemen baru yang akan ditambahkan. */

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log("data displice:", fruits2);

// Metode ini slice()membagi sepotong array menjadi array baru:
const sliceFruits = fruits2.slice(2);
console.log("data dislice: ", sliceFruits);

const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango", "papaya", "dragonfruit"];
const sliceUpTo = fruits3.slice(3, 4);
console.log("data dislice upto:", sliceUpTo);

//.sort() : metode untuk mengurutkan data
const reversedArray = [7, 6, 5, 4, 3, 2, 1];
console.log("sort : ", reversedArray.sort());

// .reverse() : metode array untuk mengurutkan data secara terbalik
console.log("reveresed array :", array.reverse());

// .concat() : Metode ini membuat array baru dengan menggabungkan (menggabungkan) array yang sudah ada:
let newArray = [1, 2, 3];
let otherArray = [12, 13, 13];
console.log("concat : ", newArray.concat(otherArray));

// .forEach(parameter) : method array untuk memanggil isi dari setiap element
let printFruit = fruits3.forEach(myFruit);
function myFruit(params) {
  console.log("for each fruit : ", params);
}

// toString () : method array untuk mengubah data array menjadi string
console.log("array to string : ", newArray.toString());

// .toLocalString() : method array untuk mengubah nilai array menjaadi format lokal rupiah
const price = [1000, 2000, 500000, 200000, 700000];
console.log(
  "Rp.",
  price.toLocaleString({
    style: "currency",
    currency: "IDR",
  })
);

// .reduce : method array untuk mengakumulasi /  total nilai dalam array ke dalam suatu hasil akhir
const totalPrice = price.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue; // akumulator untuk menyimpan hasil yang sudah di jumlahkan, curretvalue : data selanjutnya yang akan di totalkan
}, 0); //  isiasi awal nilai 0
console.log("reduced array(price) :", totalPrice);

// ARRAY OF OBJECT
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

// exercise foreach (untuk menampilkan data karryawan yang umumnya diatas 25)
const oldEmployee = employee.forEach((data) => {
  console.log("karyawan tuwir: ", data.nama, data.age > 25);
});

/**.map(): method array untuk mengubah setiap elemen dalam array menjadi nilai baru
 * dalam contoh ini mengubah data array  karyawan menjadi dara namanya saja
 */
// const mappingEmployee = employee.map((item)=>{
//     return item.nama;
// });

const mappingEmployee = employee.map((item) => {
  const newObject = {
    nama: item.nama,
    job: item.jobDesk.map((job) => job.title),
  };
  return newObject;
});
console.log("mapping data karyawan : ", mappingEmployee);

// .find() : method array buat mencari suatu dalam array
console.log(
  fruits3.find((item) => {
    return item === "Apple";
  })
);

//.findindex() : membuat method untuk mencari index data suatu elemen dalam array
const findName = employee.findIndex((item) => {
  return item.nama === "Akmal";
});
console.log("find index : ", findName);

//. filter() : method array buat memfilter data dalam array
// .some() : untuk mengecek apakah data array (minimal 1) yang memenuhi kondisi tertentu
const filterFrontendDeveloper = employee.filter((item) => {
  return item.jobDesk.some((job) => job.title === "frontend");
});
console.log("filter frontend dev : ", filterFrontendDeveloper);

//.length (): method array untuk menghitung panjang/jumlah data dalam array

console.log("jumlah karyawan : ", employee.length);

// .includes() : method array yang ngebalikin true or false jika data yang di cek cocok dengan suatu data dalam array
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango", "papaya", "dragonfruit"];
// basic
console.log("array isi jeruk: ", fruits4.includes("orange"));

// argumen pertama = data yang di cek,argumen kedua = urutan awal mulai pengecekan
console.log("cek array isi pisang di mulai dari urutan ketiga : ", fruits4.includes("Banana", 3));

//.every() : method array yang ngecek apakah semua elemen dalam array memenuhi kriteria tertentu
const cekUmurKaryawan = employee.every((item) => {
  return item.age <= 26;
});
console.log("karyawan umur 26 kebawah : ", cekUmurKaryawan);

// soal no  1. buatlah logic untuk mencari karyawan yang memiliki hobby "menulis" dan usianya diatas 25 tahun menggunakan .find dan .includes
// console.log(
//     employee.find((item)=>{
//         return item === "menulis";
//     })
// );
// console.log("find hobby : ",find.includes("25"));

const findHobby = employee.find((item) => {
  return item.hobby.includes("menulis") && item.age > 25;
});
console.log("employee with 'menulis' hobby and age > 25 : ", findHobby);

// soal no 2. buatlah logic untuk menampilkan data karyawan yang bekerja sebagai "Backend" dan memiliki gaji lebih dari 3 juta menggunakan .filter & some

const backendDev = employee.filter((item) => {
  return item.jobDesk.some((job) => job.title === "backend" && job.salary > 3000000);
});
console.log("Backend dev with salary > 3jt : ", backendDev);

//  soal no3. buatlah logic untuk mendapatkan karyawan yang cuma punya  1 hobby menggunakan .filter,.map,.length

// const singleHobbyEmployee = employee.filter((item) => {
//     return item.hobby.length === 1;
//   });

//   console.log("Employees with only 1 hobby:", singleHobbyEmployee);

const singleHobbyEmployee = employee
  .filter((item) => item.hobby.length === 1)
  .map((item) => {
    return {
      nama: item.nama,
      hobby: item.hobby,
    };
  });

console.log("Karyawan dengan 1 Hobby : ", singleHobbyEmployee);

/**4. buatlah logic untuk mencari karyawan yang posisinya frontend dengan gaji tertinggi menggunakan .filter,.some,.reduce,.find , lalu return nama karyawannya saja

 */

// Menggunakan .reduce untuk langsung mendapatkan karyawan dengan gaji tertinggi
// const employeeWithHighestSalary = employee.reduce((prev, current) => {
//     return current.jobDesk[0].salary > prev.jobDesk[0].salary ? current : prev;
//   });

//   console.log("Employee with the highest salary:", employeeWithHighestSalary.nama);


// filter

const frondEndDev = employee.filter((item) => {
    return item.jobDesk.some((job) => job.title === "frontend");
  });
  
//   reduce
  
  const highestSalaryEmployee = frondEndDev.reduce((akumulator, current) => {
    if (current.jobDesk[0].salary > akumulator.jobDesk[0].salary) {
      return current;  
    } else {
      return akumulator;  
    }
  });

//   find
  const employeeName = employee.find((item) => item.id === highestSalaryEmployee.id);
  
  
  console.log("Karyawan dengan gaji tertinggi:", employeeName.nama);
  

// // filter
// const frondEndDev = employee.filter((item) => {
//   return item.jobDesk.some((job) => job.title === "frontend");
// });

// // Reduce

// const highestSalaryEmployee = frondEndDev.reduce((akumulator, current) => {
//   return current.jobDesk[0].salary > akumulator.jobDesk[0].salary ? current : akumulator;;
// });

// // Find
//  const employeeName = employee.find((item) => item.id === highestSalaryEmployee.id).nama;

// console.log("Karyawan dengan gaji tertinggi:", employeeName);

// .reduce : method array untuk mengakumulasi /  total nilai dalam array ke dalam suatu hasil akhir

// const totalPrice = price.reduce((accumulator, currentvalue) => {
// return accumulator + currentvalue; // akumulator untuk menyimpan hasil yang sudah di jumlahkan, curretvalue : data selanjutnya yang akan di totalkan
//   }, 0); //  isiasi awal nilai 0
