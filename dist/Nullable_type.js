"use strict";
var _a;
function greet(name) {
    if (name)
        console.log(name.toLowerCase);
    console.log('Hola!');
}
greet('Happy Morning');
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined) // this is the basic checking, but we can use the Optional checking method here
    console.log(customer.birthday);
//optional chaining
//Optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//optional element access operator
// to check if the element we are checking exist or not, like an array index's value
// customer?.[0];
//it says of the customer array exists or not
//Optional call access operator
let log = null;
log === null || log === void 0 ? void 0 : log('a');
