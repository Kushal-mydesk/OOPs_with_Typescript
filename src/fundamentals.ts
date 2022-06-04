let sales: number = 123_45_78;        //this is a number is declared
let course: string = "Typescript";
let is_published: boolean = true;

// there is a  way where we can declare without anotation(check them by hovering)

let sales2 = 123;    // it will automatically do it by looking a variables value_type

// there is a type called 'any' for not declared and anotated variable , it is not a very good practice with datatype 'any'

let result;

// anotating a variable as a parameter
function render(document: number) {
    console.log(document);
}



// Arrays

let numbers: number[] = [1, 2, 3];  //basic way of declaring array

//Tupples
//it is needed where we want to work with pair of values

let user: [number, string] = [1, 'Kushal'];
console.log(user[1].length);
user.push(1);
let output: () => number = user[0].valueOf;

console.log(output);








