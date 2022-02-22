let name = {
    firs: "Dharmesh",
    last: "yadav",
    age: 22
}
let printName = function(a,b){
    console.log(this.firs + " " + this . last + this.age + " " + a + " " + b);
}


// let printMyName = printName.bind(name)
// printMyName()

// Function.prototype.myBind = function(...arg){
//     let x = this;
//     params = arg.slice(1);
//     return function (...args2){
//         x.apply(arg[0],[...params,...args2])
//     }
// }



Function.prototype.myBind = function(...args){
    let x = this,params = args.slice(1)
    return function(...args2){
        x.apply(args[0],[...params,args2])
    }
}
let printMyName2 = printName.myBind(name)
printMyName2()




// Function.prototype.myBind = function(...args){
//     let array = args.slice(1)
//     let x = this;
//     return function(...args2){
//         x.apply(args[0],[...array,args2])
//     }

// }

// let newx = printName.myBind(name, "Dharmesh","yadav")

// newx()

