// there could be a situation we can have a variable that will have a value within a limit
//there we can use the literal type
type Quantity = 50 | 100; // this is defining a type-alias of Literal type

let quantity: Quantity = 50;   // then this will only have value of 50 or 100, nothing else


type metric = 'cm' | 'inch'; //this is a string type literal