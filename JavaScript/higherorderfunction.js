function addition(arg){
    return arg + 2;
}

function sub(arg){
    return arg - 2;
}
function multiply(arg){
    return arg * 2;
}


function logic(fun,array){
    let res = []
    for(let i = 0;i< array.length;i++)res.push(fun(array[i]))
    return res;
}

let arr = [1,2,3,4,5,6]
console.log(logic(sub,arr));
console.log(logic(addition,arr));
console.log(logic(multiply,arr));
