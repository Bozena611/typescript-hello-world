let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

let level;

function render(document: any) {
    console.log(document);
}

//Enums
//PascalCase
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

//Functions
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 50_000) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTax(10_000);

//Objects
//type Alias
type Employee = {
    //use readonly when you do not want to change the value
    readonly id: number,
    name: string, 
    retire: (date: Date) => void
}
let employee: Employee = {
    id: 1, 
    name: 'Mosh',
    retire: (date: Date)=> {
        console.log(date);
    }
};

// Union Types
function kgToLbs(weight: number | string): number {
    //Narrowing

    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2;
    }
}

//both examples below will work because of Union Types we declared on line 45
kgToLbs(10);
kgToLbs('10kg');

//Intersection Types

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal Types (exact, specific) 

type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Length = 'cm' | 'inch';

// Nullable Types
// to be able to use null or undefined you need to use types for them

function greet (name: string | null | undefined) {
    if (name) {
    console.log (name.toUpperCase());
    } else {
        console.log('Hola');
    }
}

greet(null)
greet(undefined)

// Optional Chaining

type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0? null : { birthday: new Date()};
}

let customer = getCustomer(0);
/* if (customer !== null && customer !== undefined) {
    console.log(customer.birthday);
}*/
// instead of if statement above you can use 
//Optional property access operator

console.log(customer?.birthday);
