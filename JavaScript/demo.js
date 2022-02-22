// const { type } = require("express/lib/response");

// let array = [1, 2, 3, 4, 5, 6, 7];
// Array.prototype.myMap = function (callback) {
//   let index = this;
//   let res = [];
//   for (let i = 0; i < index.length; i++) {
//     res.push(callback(index[i], i));
//   }
//   return res;
// };

// let x = array.myMap((e) => {
//   return e * 2;
// });

// Array.prototype.myFilter = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) res.push(this[i]);
//   }
//   return res;
// };

// let y = array.myFilter((e) => {
//   if (e !== 4) {
//     return e;
//   }
// });

// Array.prototype.myReducer = function (callback, init) {
//   if (!init) {
//     if (typeof this[0] === "string") {
//       init = "";
//     } else if (typeof this[0] === "number") {
//       init = 0;
//     }
//   }
//   for (let i = 0; i < this.length; i++) {
//     init = callback(init, this[i]);
//   }
//   return init;
// };

// let z = array.reduce((acc, curr) => {
//   acc += curr;
//   return acc;
// }, 0);

// console.log(z);

// function Reducr(arr, callback, init) {
//   for (let i = 0; i < arr.length; i++) {
//     init = callback(init, arr[i]);
//   }

//   return init;
// }

let arr = [2, 3, 4, 5, 6];

// let a = Reducr(
//   arr,
//   (sum, curr) => {
//     sum += curr;
//     return sum;
//   },
//   0
// );


// Array.prototype.myMap = function (callback){
//   let res = [];
//   for(let i = 0;i< this.length;i++){
//     res.push(callback(this[i],i,this))
//   }
//   return res;
// }

// Array.prototype.myFilter = function (callback){
//   let res = [];
//   for(let i = 0; i < this.length; i++){
//     if(callback(this[i],i))res.push(this[i])
//   }
//   return res;
// }

// Array.prototype.myReducer = function (callback,accumlator){
//    if(!accumlator){
//      if(typeof this[0] === "string")accumlator = "";
//      if(typeof this[0] === "number")accumlator = 0;
//    }
//    for(let i = 0; i < this.length; i++){
//      accumlator = callback(accumlator,this[i])
//    }
//    return accumlator;
// }


// let x = arr.myReducer((acc,curr)=>{
//   acc += curr;
//   return acc;
// },10)
// console.log(x);


Array.prototype.myMap = function (callback){
  let array = this,res = [];
  for(let i = 0;i < array.length;i++){
    res.push(callback(array[i],i,array))
  }
  return res;
}


Array.prototype.myFilter = function (callback){
   let res = [],array = this;
   for(let i = 0;i< array.length;i++){
     if(callback(array[i]))res.push(array[i])
   }
   return res;
}

Array.prototype.myReducer = function (callback,accumlator){
  let array = this;
  if(!accumlator){
   if(typeof array[0] === "string")accumlator = "";
   if(typeof array[0] === "number")accumlator = 0;
  }
  for(let i = 0;i < array.length;i++){
   accumlator = callback(array[i],accumlator)
  }
  return accumlator;
}

let x = arr.myMap((e)=>{
    if(e === 4)return e = "hello"
    else return e = e;
})

// console.log(x);



// arr.myMap((e,i)=>console.log(e,i))







let obj = {
  name: {
    last:{final:"hahahah"}
  }
}


let {name:{last:{final}}} = obj;
console.log(final);



