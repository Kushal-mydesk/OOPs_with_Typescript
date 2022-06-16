"use strict";
function findMissVal(arr) {
    let arr2 = [];
    for (let i = 1; i <= 10; i++) {
        if (!arr.includes(i)) {
            arr2.push(i);
        }
    }
    return arr2;
}
const arr = [1, 2, 3, 4, 5];
console.log(findMissVal(arr));
