/*
JavaScript Operators
-------------------
-> Assignment Operators : =
-> Arithmetic Operators : + - / * %
-> Short hand math Operators : += -= /= *=
-> Conditional operators : < , > , <= ,>= , !==
-> Unary Operators : ++, --
-> Logical Operators : && , || , ^
-> Ternary Operators : ?:
-> Equality Operators : == , ===

*/

//-> Assignment Operators : =
let test = 10;
console.log(test);

//-> Arithmetic Operators : + - / * %
let num1 = 10;
let num2 = 20;
console.log(`sum : ${num1 + num2}`);
console.log(`sub : ${num1 - num2}`);
console.log(`mul : ${num1 * num2}`);
console.log(`div : ${num1 / num2}`);

//find the number is even or odd

let number = 11;
if(number % 2 === 0){
    console.log(`${number} is an Even Number`);
}
else{
    console.log(`${number} is an Odd Number`);
}


//-> Short hand math Operators : += -= /= *=
let a = 10;
let b = 30;
let add = 10;
// add = add + (a + b);
add += (a + b); //shortcut method
console.log(add);




//-> Conditional operators : < , > , <= ,>= , !==
let marks = 75;
if(marks <= 35){
    console.log(`You are failed the exam`)
}
else{
    console.log(`You cleared the exam`)
}


//-> Unary Operators : ++, --
let x = 10;
x = x+1;
x += 1;
x++;
console.log(x);


//-> Logical Operators : && , || , ^
/*
  AND => T && T -> T
  OR => F|| F -> F
  XOR => T ^ F , F ^ T -> T
 */
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log(`Get marry Soon`);
}
else{
    console.log(`wait until the parents Agreed`);
}


//-> Ternary Operators : ?:
/* 
syntax : (condition) ? true : false ;
*/
marks = 65;
let message = '';
(marks <= 35) ? message = 'failed': message = 'passed';
console.log(message);



//-> Equality Operators : == , ===
a = 10;
b = '20';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are not Equal');
}

