//data types
let info = "memssage"
let sum = "23"

let sum1 = 34 + 56

let isTrue = false

console.log(
    info[1]
)

//VAR   ability to call variable before init 
//as weel as giving new value to variable
console.log(a)
var a = 10

//LET   the value can be changed
//cant be called before init as it causes an error
let b = 11
console.log(b)

//CONST the value cant be changed unless it is not an object like array etc.
//cant be called before init
const c = 123
console.log(c)

const obj = {
    'name': 'max',
    'stack': 'js  c#'
}
console.log(obj)

obj.name = 'xdxd'   //cahnging value of object
console.log(obj)

let name = 'max'
const fullName = name + ' ' + obj.name  //concatenation
console.log(fullName)

const secondName = `Mr. ${name} `      //interpolation

const user = {
    name,
    ['a' + 'g' +'e']: 19,

}

console.log(user['age'], user.age)

delete user.age

user.age = 18
console.log(user.age)

 if('age' in user){
    console.log(user.age)
 }

 if(Object.hasOwn(user, name)){
    console.log(user.name)
 }