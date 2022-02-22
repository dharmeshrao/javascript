function shit() {
  console.log(a);
  b = 8;
  var a = (b = 6);
  console.log(a, b);
}

shit();

console.log(b);

function abc(...args) {
  console.log(args);
}

abc(1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 3, 1);

let st = "Dharmesh";
console.log(...st);

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];


let x = Object.assign(books)
console.log(x);



function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
randomInteger(1, 100); // returns a random integer from 1 to 100
randomInteger(1, 1000); // returns a random integer from 1 to 1000