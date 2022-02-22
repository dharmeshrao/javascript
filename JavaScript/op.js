var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
let flag = false;
const findObj = (obj,val)=>{
    // console.log(obj);
    for(key in obj){
        if(typeof obj[key] === "object")findObj(obj[key],val)
        if(obj[key] === val)flag = true;
  }
}


console.log(flag);
console.log(findObj(nestedObject, "foso2"));
console.log(flag);



let array = [1,2,3,4,5,6,7]
array = array.filter((e)=>{
    return e % 2 === 0;
})
array = array.map((e)=>{
  return e = Math.sqrt(e)
})
array = array.reduce((acc,curr)=>acc += curr)
// console.log(Math.floor(array));