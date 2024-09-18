/** while : perulangan yang akan terus diesekusi selama kondisinya true */

let test = 1; //variable inisiasi kondisi kapan dimulainya while
while (test < 5){
    console.log("while loop ke-",test);
    test++;//++ increment/nambahin 1 ke nilai test sampai memenuhi kondisi
}

let password = "123456";
while (password.length < 8){
    console.log("Password No Valid");
    password++;
}

// cari bilangan prima
let n = 20; // cari bilangan prima dari 1-20
let i = 2 // inisiasi nilai i dengan 2/ bilangan prima terkecil

while (i <=n) {
    let isPrime = true
    let j =2

    while(j<i) { // selama nilai j kurang dari i,maka eksekusi blok ini
        if(i % j === 0){
            // jika i bisa dibagi j , maka i bukan  bilangan prima
            isPrime = false; // rubah isPrime menjadi false
            break;
        }
        j++;
    }
    if (isPrime) {
        // jika isPrime masih bernilai true, maka i adalah bilangan prima
        console.log(i);    
    }
    i++
}