/** switch case : adalah logic untuk memilih salah satu kondisi yang sudah ditentukan */

let remoteButton = 1;

switch (remoteButton){
    case 1:
        console.log("Turn on"); // kondisi yang akan di esekusi
        break; // esekusi logic akan berhenti jika kondisi tersebut terpenuhi
    case 2:
        console.log("Turn Off");
        break;
    case 3:
        console.log("Volume up");
        break;
    case 4:
        console.log("Volume down");
        break; 
    default:
        console.log("input tidak valid");
        break;
            
}