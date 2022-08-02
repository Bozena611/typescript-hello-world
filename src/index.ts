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
let employee: {
    //use readonly when you do not want to change the value
   readonly id: number,
    name: string, 
    retire: (date: Date) => void
} = {
    id: 1, 
    name: 'Mosh',
    retire: (date: Date)=> {
        console.log(date);
    }
};
