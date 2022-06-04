"use strict";
//A function to calculate tax
//this annotating a function
function calculateTax(income, taxYear) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(50000, 2022));
