/**Promise adalah object yang memiliki hasil dari operasi asyncronous */

function getdataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4, 5];
    resolve(data);
  });
}

getdataFromServer()
  .then(function (data) {
    //.then untuk menangani hasil ketika promise terpenuhi/data berhasil diambil
    // function (data) : fungsi yang diesekusi dengan nilai yang diberikan dari resolve ketika promise terpenuhi
    console.log("Data yang diterima:", data);
  })
  .catch(function (error) {
    // .catch : untuk menangani error ketika promise tidak terpenuhi/data gagal diambil
    console.log("Terjadi kesalahan; ", error);
  });
//CONTOH LAIN : untuk mengambil beberapa data/API sekaligus (MEMANGGIL BEBERAPA PROMISE SEKALIGUS)
console.log("=== PARAREL PROMISE ===");
// Data Pertama
function getFirstData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 1");
  });
}
// Data Kedua
function getSecondData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 2");
  });
}

// Ambil data secara paralel
const getDataInParalel = () => {
  return Promise.all([getFirstData(), getSecondData()]);
};

// jalanin data secara paralel
getDataInParalel()
  .then((data) => {
    console.log("data: ", data);
  })
  .catch((error) => {
    console.error("error : ", error);
  });
