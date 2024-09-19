const carProducts = [
  {
    id: 1,
    name: "ESEMKA SUV 4x4 Hybrid",
    price: null,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertalite",
      },
      {
        color: "silver",
        transmission: "manual",
        type: "hybrid",
        fuelType: "pertalite",
      },
    ],
    isPreorder: true,
  },
  {
    id: 2,
    name: "BAGATATA Hyper Car V12",
    price: 370000000000,
    tag: ["Produk Terlaris", "Promo"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "premium",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  },
  {
    id: 3,
    name: "FIRIRIRI F8 Hyper Car Limited Edition",
    price: 4400000000,
    tag: ["Produk Terbaru", "Promo"],
    variant: [
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertalite",
      },
      {
        color: "white",
        transmission: "manual",
        type: "engine",
        fuelType: "pertalite",
      },
    ],
    isPreorder: false,
  },
  {
    id: 4,
    name: "LEMBERGEMBER Revuelto Supercar V12 Plug-In Hybrid",
    price: 7000000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "blue",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "green",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
  {
    id: 5,
    name: "TOYOTA Land Cruiser Prado 4x4",
    price: 250000000,
    tag: ["Produk Terlaris"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "army",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "solar",
      },
    ],
    isPreorder: false,
  },
  {
    id: 6,
    name: "Wuling YangWang U9 EV",
    price: null,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "matte black",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "electric",
        fuelType: "battery",
      },
    ],
    isPreorder: true,
  },
  {
    id: 7,
    name: "Beat Esp 110 Second",
    price: 7500000,
    tag: ["Produk Terlaris", "Bekas"],
    variant: [
      {
        color: "black",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "navy",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "white",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
      {
        color: "red",
        transmission: "automatic",
        type: "engine",
        fuelType: "pertamax turbo",
      },
    ],
    isPreorder: false,
  },
];

//   1. Cari dan tampilkan data mobil dengan harga tertinggi dan terendah

console.log("=== Soal No 1 ===");

const fitlerNull = carProducts.filter((car) => car.price !== null);
const mobilTertinggi = fitlerNull.reduce((max, car) => {
  return car.price > max ? car.price : max;
}, fitlerNull[0].price);

const mobilTerendah = fitlerNull.reduce((min, car) => {
  return car.price < min ? car.price : min;
}, fitlerNull[0].price);

console.log("Harga tertinggi:", mobilTertinggi);
console.log("Harga terendah:", mobilTerendah);

//   2. Cari dan tampilkan data mobil dengan tag "Promo"

console.log("=== Soal No 2 ===");

const promo = carProducts.filter((car) => car.tag.includes("Promo"));
console.log("Mobil Promo:", promo);

//   3. Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
console.log("=== Soal No 3 ===");

const sortCar = carProducts.slice();
sortCar.sort(function (a, b) {
  if (a.price === null) return 1;
  if (b.price === null) return -1;
  return b.price - a.price;
});
console.log("Urutan harga:", sortCar);

//   4. Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
console.log("=== Soal No 4 ===");

const tipeMobil = carProducts.reduce((accumulator, car) => {
  car.variant.forEach((variant) => {
    if (!accumulator[variant.type]) {
      accumulator[variant.type] = [];
    }
    accumulator[variant.type].push(car);
  });
  return accumulator;
}, {});

console.log("Mobil berdasarkan tipe:", tipeMobil);

//   5. buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS,
// lalu urutkan mobil berdasarkan harga dari tinggi ke rendah, tampilin hasilnya ke file JSON yang sama

console.log("=== Soal No 5 ===");
const fs = require("fs").promises;

async function sortHarga() {
  try {
    const data = await fs.readFile("carProducts.json", "utf8");
    const cars = JSON.parse(data);

    cars.sort(function (a, b) {
      if (a.price == null) return 1;
      if (b.price == null) return -1;
      return b.price - a.price;
    });

    await fs.writeFile("carProducts.json", JSON.stringify(cars, null, 2));
    console.log("urutan Mobil berdasarkan harga:");
    console.log(cars);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

// sortHarga();

//   6. Buat fungsi untuk menambahkan mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
console.log("=== Soal No 6 ===");

async function addNewCar() {
  const newCar = {
    id: 8,
    name: "Hyundai Palisade",
    price: 910000000,
    tag: ["Produk Terbaru"],
    variant: [
      {
        color: "pink",
        transmission: "automatic",
        type: "hybrid",
        fuelType: "premium",
      },
    ],
    isPreorder: false,
  };

  try {
    const data = await fs.readFile("carProducts.json", "utf8");
    const cars = JSON.parse(data);
    cars.push(newCar);
    await fs.writeFile("addNewCarProducts.json", JSON.stringify(cars, null, 2));

    console.log("Mobil baru berhasil ditambahkan:", newCar);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

addNewCar();

//   7. buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah, lalu hitung selisih harganya.

console.log("=== Soal No 7 ===");

async function calculatePriceDifference() {
  const sortedCars = carProducts.filter((car) => car.price !== null).sort((a, b) => a.price - b.price);
  const highestPrice = sortedCars[sortedCars.length - 1].price;
  const lowestPrice = sortedCars[0].price;
  const priceDifference = highestPrice - lowestPrice;
  return priceDifference;
}

const data = calculatePriceDifference();

console.log("selisih harga:", data);

//   8. buat fungsi yang mencari mobil dengan varian warna terbanyak.
console.log("=== Soal No 8 ===");

function carVarCollor() {
  const carWithMostVariants = carProducts.reduce((max, car) => {
    return car.variant.length > max.variant.length ? car : max;
  });

  console.log("Mobil dengan varian warna terbanyak:", carWithMostVariants);
}

carVarCollor();

//   9. buat fungsi untuk mencari mobil yang tidak preorder
console.log("=== Soal No 9 ===");



const nonPreorderCars = carProducts.filter((car) => !car.isPreorder);
console.log("Mobil tidak preorder:", nonPreorderCars);

//   10. buat looping untuk menampilkan SEGITIGA SAMA KAKI

console.log("=== Soal No 10 ===");

const rows = 5;
for (let i = 1; i <= rows; i++) {
  console.log(" ".repeat(rows - i) + "* ".repeat(i));
}


