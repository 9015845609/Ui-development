// let cameraBrand = 'Canon';
// let cameraPrice = 35000;
// let cameraColor = 'black';

//JavaScript Object

let camera = {
brand : 'Canon',
price : 35000,
color : 'black',
mfg : 2019,
};
console.log(camera);

//access the properties of an object
console.log(camera.brand);
console.log(camera.price);
console.log(camera.color);

//access the non-existing property 
console.log(camera.megaPixcel);  //undefined

//access the properties using dot , [] notation
console.log(camera.price);
console.log(camera['price']);

//for dynamic properties dot , [] notation
let prop = 'brand';
console.log(camera.prop);
console.log(camera[prop]);

// Nested Object
let student = {
    name : 'Arjun Reddy',
    age : 23,
    course : 'MBBS',
    adress : {
        street : 'sher khan ki gali',
        city : 'mirzapur',
        state : 'UP'
    }
};
//acess the nested object
console.log(student.adress);

//acess the propperties of an object
console.log(student.adress.street);

//CRUD Operation with an Object

//Create Operation

let mobile = {};


mobile.brand = 'Apple';
mobile.color = 'silver';
mobile.price = 35000;
mobile.IsInsured = false;

console.log(mobile);

//read operation

console.log(mobile.brand);

//upadte operation
console.log(mobile.price);  // 35000
mobile.price = 45000;
console.log(mobile);

//delete the operation
delete mobile.IsInsured;
console.log(mobile);