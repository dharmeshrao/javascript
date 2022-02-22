


console.log(a)
var a = 10;
function getData(a){
    console.log(this.a)
}

setTimeout(()=>{
    console.log(a)
},5000)
getData(a)



