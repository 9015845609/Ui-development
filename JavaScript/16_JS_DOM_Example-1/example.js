const printTriangleOne = (str) => {
    let result = "";
    for(let i = 1 ; i <= str.length ; i++){
        result += `${str.substring(0,i)} \n`
    }
    return result ;
};

const inputElement = document.querySelector("#text-input");
const displayElement = document.querySelector("#text-display");
inputElement.addEventListener('keyup' , () => {    
    displayElement.textContent = printTriangleOne(inputElement.value);
});