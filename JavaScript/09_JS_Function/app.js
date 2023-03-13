/*
JavaScript Function
-------------------
-> Its a block of statement which taken in a set parameters and doses some process and the return
-> Re-usability
*/


//print from 0-10 diff 1

function printNumber(startNumber,endNumber,increment) {
    let result = '';
    for(let i = startNumber; i<=endNumber; i += increment){
        result += `${i} `;
    }
    console.log(result); 
}
printNumber(10,50,5); //function call / execution


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
let output = sum(10,20);
console.log(output);

//function with an object as parameter
let printObject = function(obj) {
    console.log(obj);
};
printObject({name:'Rajan' , age:20});


let mobile = {
    brand : 'Apple',
    color : 'silver',
    price : 35000
};
printObject(mobile);

//Function with an array as a parameter

let printArray = function(array){
    let result = '';
    for(let index in array){
        result += `INDEX : ${index} => VALUE : ${array[index]} \n`;
    }
    console.log(result);
};
printArray([10,20,30,40]);

let colors = ['white','black','orange','purple'];
printArray(colors);

//function inside an object

let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : function(){
        // return 'Arjun Reddy';
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(student);
// console.log(student.firstName);
// console.log(student.lastName);
console.log(student.fullName());



//Nested function

let outerFn = function(){
    console.log('Iam outer Function');
    let innerFn = function(){
        console.log('Iam an Inner Function');
    };
    innerFn();
};
outerFn();


//Twisted Function

let twistedFn = function(){
    let name = 'john';
    let printStudent = function(){
        let student = {
            name : 'Rajan',
            age : 20,
            course : 'CSE'
        };
        return student;
    };
    return printStudent;
};
let innerFn = twistedFn();
let studentObj = innerFn();
console.log(studentObj);



//Prepare chicken curry with Function

let glassBowl = function(rawChicken , masala){
    //marinating the Chicken
    let marinatedChicken = `Mixing : (${rawChicken} + ${masala})`;
    return marinatedChicken;
};
let cookingBowl = function(marinatedChicken , water){
    //cooking logic
    let cookedChicken = `Cooking : (${marinatedChicken} + ${water})`;
    return cookedChicken;
};

let eatingPlate = function(cookedChicken , rice){
    //eating logic
    let eating = `EATING : (${cookedChicken} + ${rice})`;
    console.log(eating);
};

let rawChicken = '3kg chicken';
let masala = 'Garlic , Pepper , Salt';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '1 Lit Water';
let cookedChicken = cookingBowl(marinatedChicken , water);
let rice = '1Kg rice';
eatingPlate(cookedChicken , rice);


