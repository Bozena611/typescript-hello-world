let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

let level;

function render(document: any) {
    console.log(document);
}

//PascalCase
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 50_000) {
        return income * 1.2;
    } else {
        return income * 1.3;
    }
}

calculateTax(10_000);