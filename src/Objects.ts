//Object declaration
let bird: {
    color: string,
    name: string
} = {
    color: 'yellow',
    name: 'Oriel'
};

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void     //saying that this a method of type void
} = {
    id: 1,
    name: 'Kushal',
    retire: (date: Date) => {
        console.log(date);
    }
};
// we can use 'readonly' keyword before a property to prevent it to be changed


// Advance Object Declaration 

// this is called type-aliases
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee_One: Employee = {
    id: 1,
    name: 'Kion',
    retire: (date: Date) => {
        console.log(date);
    }
}
