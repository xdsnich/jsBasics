//WHILE
const factorialFunc = (number) => {
    let i = 1
    let factorial = 1;

    if(number == 0 || number < 0){
        return 0
    }

    if(number == 1){
        return factorial 
    }

    while(i <= number){
        factorial *= i
        i++
    }

    return factorial
}


let fact = factorialFunc(5)
console.log(fact)

//FOR
for( let i = 0; i < 10; i++){
    console.log('loop number: ', i)
}

function printBackwards(input, start, end) {
    for (let i = end; i >= start; i--) {
      console.log(input.charAt(i));
    }
  }

printBackwards('javascript', 1, 4)

//FOREACH

let nums = [12, 34, 45, 56, 67]

nums.forEach(num => {
    console.log(num)
})


function RemoveVowels(text){
    let result = ''
    let splitText = text.split('')
    splitText.forEach(symbol =>{
        if(!"aeuyioAEUYIO".includes(symbol)){
            result += symbol
        }
    })

    return result
}

console.log(RemoveVowels('Backend Dev'))

//DO WHILE

const replaceSpace = function(input){
    if(input === ''){
        return;
    }

    let i = 0
    let arrInput = input.split('')
    do{
        if(arrInput[i] === ' '){
            arrInput[i] = '-'
        }
        i++} while(i < input.length)
    
       return  arrInput.join('');  
}

console.log(replaceSpace('xdxdUfo addmin'))