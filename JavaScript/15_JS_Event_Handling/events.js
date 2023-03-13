const h2Element = document.querySelector("#card h2");

/**
 * GM Buttom
 * @type {element}
 */
const gmButton = document.querySelector("#gm-btn");
    gmButton.addEventListener('click',() => {
    h2Element.textContent = "Hello Good Morning";
    h2Element.setAttribute('class','red');
});

/**
 * GA Buttom
 * @type {element}
 */
const gaButton = document.querySelector("#ga-btn");
    gaButton.addEventListener('click',() => {
    h2Element.textContent = "Hello Good Afternoon";
    h2Element.setAttribute('class','blue');
});

/**
 * click on Good Evening button
 */
const clickGE = () => {
    
    h2Element.textContent = "Hello Good Evening";
    h2Element.setAttribute('class','green');
};


