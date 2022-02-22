Array.prototype.myMap = function (fun) {
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(fun(this[i], i, this));
  }
  return array;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let x = arr.myMap((e, i) => {
  console.log(e * 2);
});

Array.prototype.myFilter = function (callback) {
  const filterArr = [];
  for (let index = 0; index < this.length; index++) {
    if (!!callback(this[index], index, this)) {
      filterArr.push(this[index]);
    }
  }
  return filterArr;
};

Array.prototype.myReduce = function (callback, accumulator) {
  if (this.length < 1) {
    throw new Error("Array is Empty");
  }

  if (!accumulator) {
    if (typeof this[0] === "string") {
      accumulator = "";
    } else if (typeof this[0] === "number") {
      accumulator = 0;
    }
  }

  for (let index = 0; index < this.length; index++) {
    accumulator = callback(accumulator, this[index]);
  }
  return accumulator;
};

const names = ["Zakir", "Rashid", "Harish"];
const filterNames = names.myFilter((name) => name !== "Zakir");
const statment = names.myReduce((acc, ele) => acc + ele);

console.log(filterNames); // [ 'Rashid', 'Harish' ]
console.log(statment); // Zakir Rashid

String.prototype.MySplit = function (arg) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== arg) arr.push(this[i]);
  }
  return arr;
};

let name = "Dharmehs";
name = name.MySplit("");

Array.prototype.MyJoin = function (arg) {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    str += this[i] + arg;
  }
  return str;
};

// name = name.MyJoin("45");
console.log(name);

String.prototype.MyTrim = function () {
  let ind = this;
  let a;
  let b;
  for (let i = 0; i < ind.length; i++) {
    if (ind[i] != " ") {
      a = i;
      break;
    }
  }

  for (let i = ind.length - 1; i >= 0; i--) {
    if (ind[i] != " ") {
      b = i;
      break;
    }
  }
  let str = "";
  for (let i = a; i <= b; i++) str += ind[i];
  return str;
};

let mystr = "    Da  hta k    ";
console.log(mystr.MyTrim());
