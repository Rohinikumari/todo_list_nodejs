let stuff = require('./stuff')

function callFunction(fun){
    fun()
}

let sayBye = ()=>{
    console.log('Bye')
}

callFunction(sayBye)

console.log(stuff.counter(['Rohini','Lucky']))
console.log(stuff.adder(5,1))
console.log(stuff.adder(stuff.pi,2))
console.log(stuff.pi)