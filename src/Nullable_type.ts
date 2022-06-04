function greet(name: string | null) {
    if (name)
        console.log(name.toLowerCase);

    console.log('Hola!');
}

greet('Happy Morning');
greet(null);


// we can never use null value in typescript as it can lead to bugs
// but if we want to use it anyway then we can use the union type and set a special code block for that


// Optional Chaining
// When working with nullable objects, we may have to null-check 

type Customer = {
    birthday?: Date   //we are making this property as optional
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined)     // this is the basic checking, but we can use the Optional checking method here
    console.log(customer.birthday)

//optional chaining
//Optional property access operator
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());

//optional element access operator
// to check if the element we are checking exist or not, like an array index's value
// customer?.[0];
//it says of the customer array exists or not

//Optional call access operator

let log: any = null;
log?.('a');

