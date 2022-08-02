let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;

let level;

function render(document: any) {
    console.log(document);
}

enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);
