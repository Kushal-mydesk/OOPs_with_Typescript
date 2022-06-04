"use strict";
// Here we can see how we we can let a variable have two datatypes at once
function kg_to_Lbs(weight) {
    //narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kg_to_Lbs(68));
