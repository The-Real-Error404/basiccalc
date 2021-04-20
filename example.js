//import nodejs package
const example = require('4functioncalculator')

//4 functions:

//addition
var a = example.add(10, 5)
console.log(`addition: ` + a)
//subtraction
var s = example.subtract(10, 5)
console.log(`subtraction: ` + s)
//multiplication
var m = example.multiply(10, 5)
console.log(`multiplication: ` + m)
//division
var d = example.divide(10, 5)
console.log(`division: ` + d)
