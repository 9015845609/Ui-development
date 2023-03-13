//1.find the number of 'o' in the given string

let msg = 'Good Morning';
let findZero = (str) => {
    let count = 0;
    for(let i=0; i<=str.length-1; i++){
        let char = str.charAt(i);
        if(char === 'o' || char ==='O'){
            count ++;
        }
    }
    return count;
};
console.log(`THE Zeros in string is : ${findZero(msg)}`);


//2.find the reverse string of the goven string

msg = 'Good Morning';
let reverseString = (str) => {
    let tempString = '';
    for(let i = str.length-1; i >=0 ; i--){
        let char = str.charAt(i);
        tempString += char;
    }
    return tempString;
};
console.log(`${msg} => ${reverseString(msg)}`);


//3.check the given string is palindrome or not
msg = 'ABA';
let isPalimdrome = (str) => {

    // return (str === reverseString(str)); // or
    if(str === reverseString(str)){
        return true;
    }
    else{
        return false;
    }
};
console.log(`${msg} is Palimdrome ? ${isPalimdrome(msg)}`);

//4.Triangle String One 

/*str = Good
G  -> str.substr(0,1)
Go -> str.substr(0,2)
Goo -> str.substr(0,3)
Good -> str.substr(0,4)
*/

msg = 'Sumit kushwaha';
let TriangleOne = (str) => {
    let tempStr = '';
    for(let i = 1; i<=str.length; i++){
        tempStr += `${str.substr(0,i)} \n`;
    }
    return tempStr;
};
console.log(TriangleOne(msg));


//4.Triangle String Two
/*Good -> str
Good -> str.substr(0)
 ood -> str.substr(1)
  od -> str.substr(2)
   d -> str.substr(3)
   i = 0; i<=length-1;
*/
let addSpace = (number) => {
    let tempSpace = '';
    for(let i=1; i<=number; i++){
        tempSpace += ' ';
    }
    return tempSpace;
};

msg = 'Sumit kushwaha';
let TriangleTwo = (str) => {
    let tempStr = '';
    for(let i = 0; i<=str.length-1; i++){
        tempStr += `${addSpace(i)}${str.substr(i)} \n`;
    }
    return tempStr;
};
console.log(TriangleTwo(msg));
