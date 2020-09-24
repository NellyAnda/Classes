/*let mySection = document.getElementById('mySection');
console.log(mySection);

let paragraphes = document.getElementsByTagName('p');
console.log(paragraphes);

let red = document.getElementsByClassName('red');
console.log(red);

let query = document.querySelector('#mySection');
let queryAll = document.querySelectorAll('.red, section');
console.log(query, queryAll); 

let monSpan = document.querySelectorAll('span');
console.log(monSpan[monSpan.length-1]);

let myParagraph = document.querySelectorAll('#mySection2 > div p: first-child');
console.log(myParagraph);

let myParagraph = document.querySelector('#mySection2 p');
console.log(myParagraph);

let myParagraph = document.querySelector('#mySection2 p');
console.log(myParagraph.parentNode);

let myParagraph = document.querySelector('#mySection2 p');
console.log(myParagraph.firstElementChild);
console.log(myParagraph.lastELementChild);

let myParagraph = document.querySelector('#mySection2 p');
console.log(myParagraph.firstElementChild,nodeType);
console.log(myParagraph.lastELementChild,nodeType);

let myParagraph = document.querySelector('#mySection2 p');
console.log(myParagraph,childNodes)
*/




//récupérer lien 2
/*let monDernierLien = document.querySelector('#maSection3 > div > p > a');
console.log(monDernierLien);*/

/*
let monDernierLien = document.querySelector('#divParent p a:last-child');
console.log(monDernierLien.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild);*/

let nouveauLien = document.createElement('a');
nouveauLien.href = 'https://google.fr';
nouveauLien.target = '_blank';

nouveauLien.innerHTML = 'Lien 1.4';
console.log(nouveauLien);

document.querySelector('#divParent p:first-child').appendChild(nouveauLien);

document.querySelector('#divParent p:first-child').insertBefore(nouveauLien,
	document.querySelector('#divParent p a:first-child')
);

document.querySelector('#divParent p:first-child').removeChild(
	document.querySelector('#divParent p a:last-child')
	);


