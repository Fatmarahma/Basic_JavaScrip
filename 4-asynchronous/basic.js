/**
 * Bahasa pemograman bisa di esekusi dengan 2 cara yaitu syncronous dan asynchronous
 * synchronous : kode akan diesekusi  secara terurut dari atas sampai bawah
 * asyncronous : kebalikannya, kode tidak harus menungu kode lainnya di esekusi,
 * melainkan bisa di esekusi secara langsung atau sesuai waktu yang ditentukan
 */
console.log("=== Eksekusi Pertama ===");
function printLog(){
    console.log("=== Eksekusi Kedua ===");
}
setTimeout(printLog,3000);
console.log("=== Eksekusi Ketiga ===");

