let array = ["a", "b", "c"];
let obj = {
  name: "Dharmesh",
  city: "Gurgaon",
  getIntro: function () {
    console.log(this.name + " from " + this.city);
  },
};

function bbc() {
  this.length = arguments.length;
  this.name = "Dhartmehs";
}

let x = Object.create(obj);

function MyArray() {
  this.length = arguments.length;
  for (let i = 0; i < arguments.length; i++) {
    this[i] = arguments[i];
  }
}
let arrar = [1, 2];

Array.prototype.Dalo = function (elem) {
  let index = this.length;
  this.length++;
  this[index] = elem;
};

arrar.Dalo("Dharmeslhfvlsdakmnvlfkasj");
MyArray.prototype.Nikalo = function () {
  let index = this.length - 1;
  delete this[index];
  this.length--;
};
console.log(arrar);

let jaadu = new MyArray("Dharmesh", "Sahil", "Sourav");

// jaadu.Dalo("Arpit");
for (let i = 0; i < 10; i++) {
  // jaadu.Dalo(i);
}
// jaadu.Nikalo();
// console.log(Object.values(jaadu));

function addNum() {
  console.log(arguments[0]);

  //  let sum = 0;
  //  for(let i = 0;i< abc.length;i++){sum += abc[i]}
  //  console.log(sum);
  // console.log(addNum.length);
}

addNum(1, 2, 1, 5, 2, 1, 2, 3, 4, 5, 6, 7);




