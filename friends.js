const friendArray = ["Josh", "Garrett", "Jake", "Kayla", "Haley"];

for (let i = 0; i < friendArray.length; i++) {
    console.log(friendArray[i] + ":")

    for (let j = 99; j >= 1; j--) {
        if (j === 2) {
            console.log("2 lines of code in the file, 2 lines of code; " + friendArray[i] + " strikes one out, clears it all out, 1 line of code in the file");
        } else if (j === 1) {
            console.log("1 line of code in the file, 1 line of code; " + friendArray[i] + " strikes one out, clears it all out, no more lines of code in the file");
        } else {
            console.log(j + " lines of code in the file, " + j + " lines of code; " + friendArray[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
        }
    }
}