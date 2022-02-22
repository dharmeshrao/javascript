// const findGreaterOrNot = (num1,num2)=>{
//     let a = num1 - 0;
//     let b = num2 - 0;
//     return a > b;
// }

// console.log(findGreaterOrNot("112","111"));
// console.log(findGreaterOrNot("525","1111"));

// console.log(findGreaterOrNot("11","0"));
// console.log(findGreaterOrNot("1","1"));


const findGreaterOrNot = (num1,num2)=>{
    if(num1.length > num2.length)return true;
    if(num2.length > num1.length)return false;
    let i = 0,j = 0;
    while(i < num1.length && j < num2.length){
        if(num1[i].charCodeAt(0) > num2[j].charCodeAt(0))return true;
        if(num2[j].charCodeAt(0) > num1[i].charCodeAt(0))return false;
        else {i++,j++}
    }
    return false
}

console.log(findGreaterOrNot("112","111"));
console.log(findGreaterOrNot("525","1111"));

console.log(findGreaterOrNot("11","0"));
console.log(findGreaterOrNot("1","1"));