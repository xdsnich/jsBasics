//1 FUNCTION DECLARATION
function AreaCalculator(length, width){
    let area = length * width

    console.log(area)
}

//1.1 FUNCTION DECLARATION with COMMON value

function sidesSum(length, width = 10){
    let sum = (length + width) *2
    console.log(sum)

    return sum
}

//2 FUNCTION EXPRESSION

const DOUBLE = function(num){
    return num ** 2
}


//3 ARROW FUNCTION
const POW = (num1, num2) => {
    return num1 ** num2
}

//==============================================================

//#1
AreaCalculator(10, 12)

//#1.1
sidesSum(18)

//#2
let doubleNum = DOUBLE(10)
console.log(doubleNum)

//#3
var numPow = POW(10, 5)
console.log(numPow) 