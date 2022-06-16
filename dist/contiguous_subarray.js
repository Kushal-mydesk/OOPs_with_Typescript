"use strict";
let array = [-2, -3, 4, -1, -2, 1, 5, -3];
function sub_array(arr, arr_length) {
    let max_sum = arr[0];
    let curr_sum = arr[0];
    for (let i = 0; i < arr_length; i++) {
        curr_sum = Math.max(arr[i], curr_sum + arr[i]);
        max_sum = Math.max(max_sum, curr_sum);
    }
    return max_sum;
}
console.log(sub_array(array, array.length));
