// creation of an array

let numbers = [10,20,30];
console.log(numbers);

//acess the elements of an array
console.log(numbers[0]); //0

//acess the non-existing
console.log(numbers[3]); //undefined

//Iteration of array elements
let colors = ['white' , 'black' , 'silver' , 'purple' , 'blue' , 'yellow'];

//1.normal loop
let result = '';
for(let i=0; i <= colors.length-1; i++){
    result += `${colors[i]} `;
}
console.log(result);

//2. For -in loop upto ES5
result = '';
for(let index in colors){
    result += `${colors[index]} `;
}
console.log(result);

//3.for-of lool from ES6
result = '';
for(let color of colors){
    result += `${color} `;
}
console.log(result);

//4. forEach function upto ES5
result = '';
colors.forEach(function(color) {
    result += `${color} `;
});
console.log(result);

// 5. forEach with Arrow Function from ES6
result = '';
colors.forEach(color => result += `${color} `);
console.log(result);


// Array of Object
let employees = [
    {
        id : 1,
        name: 'john',
        age: 40,
        designation: 'Manger',
        isActive: true
    },
    {
        id : 2,
        name: 'wilson',
        age: 46,
        designation: 'Sr.Manger',
        isActive: true
    },
    {
        id : 3,
        name: 'Rajan',
        age: 25,
        designation: 'Software Manger',
        isActive: true
    },
    {
        id : 4,
        name: 'Laura',
        age: 28,
        designation: 'Team Lead',
        isActive: true
    },
    {
        id : 5,
        name: 'David',
        age: 26,
        designation: 'Software Engineer',
        isActive: true
    }
];

//access all employees
console.log(employees);
console.log(employees[0].name);

//iterate employees
result = '';
for(let employee of employees){
   result += `${employee.name} `;
}
console.log(result);


//filter the junior employees : age <= 30
console.log(employees);
let juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);

// filter active employees : isActive : true

let activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);


// Function of Array
//shift()	Removes the first element of an array, and returns that element

console.log('----------------shift()----------------');

let technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

//unshift()	Adds new elements to the beginning of an array, and returns the new length
console.log('----------------unshift()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);


//push()	Adds new elements to the end of an array, and returns the new length
console.log('----------------push()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.push('node js');
console.log(technologies);

//pop()	    Removes the last element of an array, and returns that element
console.log('----------------pop()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

//sort()	Sorts the elements of an array
console.log('----------------sort()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

//reverse()	Reverses the order of the elements in an array
console.log('----------------reverse()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

//reverse order of the elements
console.log('----------------reverse Order()----------------');
technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

//splice(index)	Removes all elements from an array
console.log('----------------splice(index)----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

//splice(index number of elements)	Removes the given mo.of elements from an array
console.log('----------------splice()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);

//splice(index,1, replace Elements)	it replaces the given elements at the given index
console.log('----------------splice()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'node js');
console.log(technologies);


//join()	Joins all elements of an array into a string
console.log('----------------join()----------------');

technologies = ['html','css','javascript','jquary','bootstrap'];
console.log(technologies);
let techString = technologies.join(' - ');
console.log(techString);

//split()  to split a string to an array
console.log('----------------split()----------------');
console.log(techString);
let newTechs = techString.split('-');
console.log(newTechs);
//slice()	Selects a part of an array, and returns the new array
//forEach()	Calls a function for each array element
//find()	Returns the value of the first element in an array that pass a test

//filter()	Creates a new array with every element in an array that pass a test
//filter the junior employees : age <= 30
console.log('----------------filter()----------------');
juniorEmployees = [];
for(let employee of employees){
    if(employee.age <= 30){
        juniorEmployees.push(employee);
    }
}
console.log(juniorEmployees);



let jrEmployees = employees.filter(function(employee){
    return employee.age <= 30;
});
console.log(jrEmployees);


// filter active employees : isActive : true
console.log('----------------filter()----------------');

activeEmployees = [];
for(let employee of employees){
    if(employee.isActive){
        activeEmployees.push(employee);
    }
}
console.log(activeEmployees);

let actEmployees = employees.filter(function(employee){
    return employee.isActive;
});
console.log(actEmployees);