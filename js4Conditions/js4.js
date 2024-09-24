//IF
const  isAdult = (age) =>{
    if(age >= 17){
        return true
    }
    return false
}

let age = 17
console.log(isAdult(age))

//ELSE
let a = 1

if(a == 2){
    console.log(a)
}
else{
    console.log(`a is ${a}`)
}

//ELSE IF

if(age > 60){
    console.log('ur too old')
}
else if( age <=17){
    console.log('ur too young')
}
else{
    console.log('perfect age to join 3 assault brigade')
}


//SWICH CASE
let fruit = 'orange'

switch (fruit){
    case 'apple':
        console.log('its an apple');
        break;
    case 'banana':
        console.log('its a banana');
        break;
    default:
        console.log('it actually smth diff');
}