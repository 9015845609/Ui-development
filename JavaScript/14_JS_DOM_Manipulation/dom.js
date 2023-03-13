/*
Docoment Object Model (DOM)
---------------------------
javascript -> acces the html tags -> modify them
*/


/*
*  access the html tags
* document -> DOM , window -> BOM
*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);

/*
* document.getElementById();
* document.getElementsByClassName();
* document.getElementsByTagName();
* document.querySelector();
*/
const navTab = document.querySelector("nav");
console.log(navTab);

const navTagWithClass = document.querySelector(".main-nav");
console.log(navTagWithClass);

const navTagWithId = document.querySelector("#navbar");
console.log(navTagWithId);


/**
 * change the content of the element
 * text content
 * html content
 */

const divTag = document.querySelector("#change");
divTag.innerHTML = `<h1>Hello <span style = "color: orange">Good Morning</span></h1>`;

/**
 * change the styles
 */

const h2Tag = document.querySelector("#styles h2");
h2Tag.style.backgroundColor = "red";
h2Tag.style.color = "white";
h2Tag.style.padding = "20px";
h2Tag.style.margin = "20px";
h2Tag.style.textAlign = "center";

/**
 * change the atrributes
 * getAtribute("name");
 * setAtribute("name", "value");
 */


const imageTag = document.querySelector("#image img");
imageTag.style.width = "300px";
imageTag.style.height = "200px";
imageTag.style.margin = "20px";
imageTag.style.borderRadius = "20px";
imageTag.style.boxShadow = "0 0 10px gray";

console.log(imageTag.getAttribute("src"));
imageTag.setAttribute("src","../image/03.jpg");



