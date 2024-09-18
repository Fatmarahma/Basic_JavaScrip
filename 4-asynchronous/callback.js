/**CALLBACK
 * fungsi yang dikirim sebagai argumen/parameter ke fungsi yang lain
 */



function printResult(data) {
    console.log(data);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let test = myCalculator(5, 5);
printResult(test); 
