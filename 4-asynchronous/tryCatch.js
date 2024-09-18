// Fungsi untuk mengambil data dari server
function getDataFromServer() {
  return new Promise((resolve, reject) => {
    const success = true; // Ubah menjadi false untuk simulasi error
    if (success) {
      resolve("Data berhasil diambil!");
    } else {
      reject("Terjadi kesalahan saat mengambil data.");
    }
  });
}

// Fungsi asinkron untuk mengambil data
async function fetchData() {
  try {
    const data = await getDataFromServer(); // Menunggu hasil dari promise
    console.log(data); // Jika berhasil, tampilkan data
  } catch (error) {
    console.error("Error: ", error); // Tangkap dan tampilkan error jika terjadi
  }
}

// Memanggil fungsi fetchData
fetchData();

// contoh

const pembagian = (num1, num2) => {
  try {
    if (num2 === 0 || num1 < num2) {
      throw "Gabisa dibagi 0!";
    }
    return num1 / num2;
  } catch (error) {
    console.log(error);
  }
};
console.log("Success : ", pembagian(10,2));
console.log("failed : ", pembagian(10,0));
