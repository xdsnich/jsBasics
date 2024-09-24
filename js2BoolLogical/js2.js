//boolean operation && logical operation

name = 'max'
let a = 10
console.log( 
    name === 'max',
    a != 10,
    a > 2,
    a < 20,
    a >=21,
    a <=10
)


let iq = 110
age = 17
let isAdult = age >=18


let isStudent = iq > 90 || !isAdult         //OR

let acsess = age === 17 && name ==  'max'   //AND

console.log(
    isAdult,
    isStudent,
    acsess
)
