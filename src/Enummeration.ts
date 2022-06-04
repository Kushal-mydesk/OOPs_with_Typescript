//Enummerations - this actually stores a list of constants

//Declaration ,if we use enum as a constant , then compiler uses an optimized code
const enum Size { Small = 1, Medium, Large };    //if we assign a numerical value to first variable, compiler will automatically set the next value of others

let mySize: Size = Size.Medium;
console.log(mySize);

