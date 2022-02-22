//Call
let name = {
    firstname: "dharmesh",
    lastname:"yadav",
    printFullName: function (a){
        console.log(this.firstname + ' ' + this.lastname + ' ' + a);
    }
}

name.printFullName()

let name2 = {
    firstname:'rahul',
    lastname:'yadav'
}

//we can borrow fuction from other objects in call method
name.printFullName.call(name2,'yadav')


//Apply
name.printFullName.apply(name2,['yadav'])
//only argument passed in array.

//Bind
let printMyName = name.printFullName.bind(name2,'yadav')

printMyName()