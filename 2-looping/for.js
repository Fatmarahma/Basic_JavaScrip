/** for loop mirip dengan while, sama-sama perulangan
 * tapi for dipakai kalau kita udah tau kapan perulangan tersebut harus di berhentikan
 */

for (let i = 0; i < 5; i++){
    console.log("looping ke-",i);
}

let array = [1,2,3,4,5];
let tambah = 0;
let kali = 2
for (let i = 0; i < array.length; i++){
    tambah += array[i];
    kali *= array[i];
}
console.log("tambah :",tambah);
console.log("kali : ",kali);



