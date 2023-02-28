//print from 0-10 diff 1

function printNumber(startNumber,endNumber,increment) {
    let result = '';
    for(let i = startNumber; i<=endNumber; i += increment){
        result += `${i} `;
    }
    console.log(result); 
}
printNumber(10,50,5); //funtion call / execution


//Function without Parameter

function greet() {
    console.log('Good Morning');
}
greet();

//Function Expression
let greetMe = function() {
    console.log('Good Morning');
}
greetMe();

//Function with Parameter
let wishMe = function(name , age) {
    let message = `Hello ${name} You are ${age} yrs old`;
    console.log(message);
};
wishMe('john' , 40);

//fanction with return Type

let sum = function(a , b) {
    let result = 2 * (a + b);
    return result;    
};
let output = sum({a:10},{b:20});
console.log(output);



