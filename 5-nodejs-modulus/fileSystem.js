//FilSystem(fs) : modul untuk  berinteraksi dengan file di javascrip
//import module
const fs = require("fs");

//Menulis file menggunakan.writefile
fs.writeFile("./textFile.txt", "Hallo,nama saya mulyono.saya king of java", "utf8", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File berhasil disimpan");
});

//.appendFile ("filepath","isi data",encoding,return)

fs.appendFile("./textFile.txt", "\n saya adalah ayahnya fufufafa", "utf8", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("konten berhasil ditambahkan");
});

// .readFile("filepath",encoding,return) :buat ngebaca data  dari sebuah file
fs.readFile("./textFile.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("readFile:", data);
});

//.readFileSync : membaca file secara synchronus

try {
  const data = fs.readFileSync("./textFile.txt", "utf8");
  console.log("read sync : ", data);
} catch (error) {
  console.log(error);
}

//.unlink ("filePath") : uuntuk menghapus file
fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("file berhasil di apus");
  
});
