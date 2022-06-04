//A function to calculate tax
//this annotating a function
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;

}

console.log(calculateTax(50_000, 2022));