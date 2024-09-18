/**async biasanya dipakai untuk memanggil data/API */

function getdataFromServer() {
    return new Promise(function (resolve, reject) {
      let data = { id: 1, name: "danu", job: "frontend" };
      if (data) {
        resolve(data);
      } else {
        reject("data tidak ditemukan");
      }
    });
  }
  
  async function fetchData() {
    try {
      const getData = await getdataFromServer();
      console.log("Data yang diterima : ", getData);
    } catch (error) {
      console.log("Terjadi kesalahan saat mengambil data:", error);
    }
  }
  
  // Pastikan untuk memanggil fungsi async
  fetchData();
  
