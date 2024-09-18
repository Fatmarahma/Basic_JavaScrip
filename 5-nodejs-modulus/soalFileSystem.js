// soal 1

// const fs = require("fs");

// fs.readFile("employee.json", "utf8", (error, data) => {
//   if (error) {
//     console.log("Error membaca file:", error);
//     return;
//   }

//   const employees = JSON.parse(data);
//   employees.forEach((employee) => {
//     console.log(employee.nama);
//   });
// });

const fs = require("fs");

fs.readFile("employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const employees = JSON.parse(data);

  const employeeNames = employees.map((employee) => employee.nama);

  console.log(employeeNames);
});

//soal 2

const newEmployee = {
  id: 6,
  nama: "Jenny",
  age: 27,
  jobDesk: [
    {
      title: "frontend",
      salary: 8000000,
    },
  ],
  hobby: ["membacok"],
};

fs.readFile("employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const employees = JSON.parse(data);
  employees.push(newEmployee);

  fs.writeFile("employee.json", JSON.stringify(employees, null, 2), (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("File Berhasil Ditambahkan!");
  });
});

//soal no3

fs.readFile("employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const employees = JSON.parse(data);

  const karyawanTuwir = employees.filter((employee) => employee.age >= 26);

  fs.writeFile("karyawan_tuwir.json", JSON.stringify(karyawanTuwir, null, 2), (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Data karyawan tuwir berhasil disimpan!");
  });
});

//soal No 4

fs.readFile("./employee.json", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  let employees = JSON.parse(data);
  employees = employees.filter((employee) => employee.id !== 1);

  fs.writeFile("deleted_data.json", JSON.stringify(employees, null, 2), (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Data Berhasil di Hapus!");
  });
});
