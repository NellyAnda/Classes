/*alert('Hello World')*/
/*var age = 33;
console.log(age);

var b = 3;
console.log(age + b);
console.log(parseInt(age) + b) /*focer à mettre du numérique integer*/
/*
var estVraie = true; // boolean
var estVraieChaine = "true"; // string

console.log(typeof age);
console.log(typeof b);
console.log(typeof estVraie);
console.log(typeof estVraieChaine);
// donne le type attendu par la variable

console.log(3==3); //affiche true
console.log(3!='3'); //affiche false
console.log(3==='3'); //affiche false
console.log(3!=='3'); //affiche true
console.log(3 > 2); //affiche true
console.log(3 >= 2); //affiche true
console.log(3 < 2); //affiche false
console.log(3 <= 2); //affiche false

// opérateurs logiques
var age = 42;
console.log((age >= 18) && (age <= 30)); //2 conditions
console.log((age >= 18) || (age <= 30)); //1 des 2 conditions

//la négation
console.log(!(age >= 18)); //âge ne doit pas être supérieur ou égale
var age = 16;

if (age >= 18) {
  console.log('OK');
} else {
  console.log('KO');
}

if (age >= 18) {
  console.log('OK');
} else if (age == 18) {
  console.log('Egal à 18');
} else {
  console.log('KO');
}

//SWITCH pour afficher des messages pour des cas particuliers
var age = 16;

switch (age) {
  case 20:
    console.log('20 ans');
    break;
  case 12:
    console.log('12 ans');
    break;
  default:
    console.log('ni 12 ans ni 20 ans')
    break;
}

var age = 16;
var estMajeur = null;

if (age > 18) {
  estMajeur = true;
} else {
  estMajeur = false;
}
console.log(estMajeur);
// les 2 variables autour sont les mêmes
var estMajeur = (age > 18) ? true : false; //opérateur ternaire
console.log(estMajeur);


//vérifie l'existence et le contenu de la variable
var conditionDeTest = 0; //à 0 est faux, à 1 est vrai
if (conditionDeTest) {
  console.log('Vrai');
} else {
  console.log('Faux');
}

var conditionDeTest = ''; //
if (conditionDeTest) {
  console.log('Vrai');
} else {
  console.log('Faux');
}

//incrémentation et décrémentation
var age = 18;
age++;
console.log(age);
age--;
console.log(age);
//si on mixe les deux
var age = 18;
console.log(++age); 
//++ age
// age = age +1
//console.log (age)
var age = 18;
console.log(age++);
//age++
// console.log (age)
//age = age +1

/*
var anneeEnCours = 2020;
var anneeSaisie = parseInt(prompt('Quel est votre année de naissance?'));

if ((anneeEnCours - anneeSaisie) >= 18) {
  console.log('Vous êtes majeur');
} else {
  console.log('Vous êtes mineur');
}
*/

/*CALCUL D'UNE ANNEE BISSEXTILE*/
/*
var annee = parseInt(prompt('Est-ce que l\'année est bissextile?'));

if ( ((annee%4 == 0) && !(annee%100 == 0)) || (annee%400 == 0) ) {
  console.log('Bissextile');
} else {
  console.log('Non bissextile');
}
*/

/*L'utilisateur X demande une subvention pour son entreprise : 
Il est éligible à une réduction de 10% du CA Si :
Son revenu de l'année en cours est compris entre 30000 et 60000 annuel
Il est éligible à une réduction de 20% du CA Si :
Son revenu de l'année en cours est compris entre 20000 et 20999 annuel MAIS que le revenu de l'année précédente n'excède pas 50000
Il a 5% supplémentaire si l'année en cours est bissextile :)
En 2019 il a déclaré 44000 et en 2020 il a déclaré 50000 
A combien peut-il prétendre en pourcentage ? 
Quel est le montant de la réduction finale  ?*/
/*
var chiffreDAffaire2019 = 44000;
var chiffreDAffaire2020 = 50000;
var reduction = 0;

if ( (chiffreDAffaire2020 >= 30000) && (chiffreDAffaire2020 <= 60000) ) {
  reduction = 10;
} else if ( ((chiffreDAffaire2020 >= 20000) && (chiffreDAffaire2020 <= 20999)) && (chiffreDAffaire2019 <= 50000) ) {
  reduction = 20;
} 

if ( ((annee%4 == 0) && !(annee%100 == 0)) || (annee%400 == 0) ) {
  reduction += 5;
}

console.log('Votre réduction est de ' + reduction + '%');
console.log('Votre réduction pour l\'année 2020 est de '+ (chiffreDAffaire2020/100)*reduction + ' euros');
*/


/*NOMMER LES VARIABLES*/
/*
// Problème 1, confusion dans les blocs {} :
var x = 1;
if (true) {
var x = 2; // même variable, car sa portée n'est pas celle du bloc !
console.log(x); // 2
}
console.log(x); // 2
*/


// Problème 3, pas d'erreur levée en cas de déclarations multiples :
// Vous aurez simplement un warning dans les navigateurs récents.
/*var i = 1;
var i = 2;
var ajouter = function(a, b) {
  return a + b;
};
var ajouter = function(a, b) {
  return a + b;
};

const personne = {
  prenom: 'Sylvain'
}
personne.nom = 'Dupont';
console.log(personne);

let test = false;
if (true) {
  let test = true;
 console.log(test);
}
console.log(test);

const a = 1;
let b = a;
console.log(a, b);
*/
/*
for (let i = 0; i < 101; i += 2) {
  console.log(i);
}

for (let i = 0, j = 1; i < 4 && j < 3; i++, j++) {
  console.log(i, j);
}*/

/*
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 10);*/

/*let Voiture = {
  couleur: 'Bleu',
  puissance: 6,
  type: 'Berline'
  };
  
  console.log(Voiture);
*/

/*
let maPhrase = 'Salut toi !';
console.log(maPhrase.length);


maPhrase.startsWith;
console.log(maPhrase.startsWith('F'));
*/
/*
let maPhrase = 'Bonjour';
let stringSize = maPhrase.length;
let reverseString = '';

for (let i = maPhrase.length; i >= 0; i--) {
  reverseString += maPhrase.charAt(i);
}

console.log(reverseString);
*/
/*
let maPhrase = 'Salut toi!';
let i = maPhrase.length;

while (i >= 0) {
  console.log(maPhrase.charAt(i));
  i--;
}
*/

/*// A l'aide d'une boucle vous devez afficher les
// chiffres paires de façon croissante (jusqu'a 100)
// ET les chiffres impaires de façon décroissante

for (let i = 0, j = 99; i < 101 && j >= 0; i+=2, j-=2)  {
  console.log(i,j);
}*/

/*
function somme (a, b) {
  return a + b;
}

console.log(somme(5,3));
let result = somme (4,12);
console.log(result);
*/

/*
function estBissextile (annee) {
  if ( ((annee%4 == 0) && !(annee%100 == 0)) || (annee%400 == 0) ) {
  return true;
} else {
  return false;
  }
}
console.log(estBissextile(2020)); // on veut tester la fonction estBissextile avec la valeur 2020


function estBissextile (annee) {
  if ( ((annee%4 == 0) && !(annee%100 == 0)) || (annee%400 == 0) ) {
}

for (let i = 2000 ; i <= 2020; i++) {
  console.log(i+''+estBissextile(i));
}



function estBissextile (annee) {
  if ( ((annee%4 == 0) && !(annee%100 == 0)) || (annee%400 == 0) ) {
}

for (let i = 2000 ; i <= 2020; i++) {
  console.log(i+''+(estBissextile(i)? 'est bissextile': 'n\'est pas bissextile);
}
*/
/*
function reverseSentence (phrase) {
  let reverseString = '';
  for (let i = phrase.length; i >= 0; i--) { //faire une loop de la fin vers le début
    reverseString += phrase.charAt(i);
  }
  return reverseString;
} 

function isAPalindrome (phrase) {
  phrase = phrase.replace(/[^A-Z0-9]/ig, "").toLowerCase(); //enlever les espaces, majuscules et caractères spéciaux
  return phrase === reverseSentence(phrase); //la phrase doit être strictement égale à la phrase parcourue à l'envers
}

console.log(isAPalindrome('chaussette')? 'est un palindrome' : 'n\'est pas un palindrome');
*/
/*
let monTableau = ["bleu", true, 4];
console.log(monTableau[0]);
console.log(monTableau[1]);
console.log(monTableau[2]);
console.log(monTableau[3]);
console.log(monTableau.length); // longueur du tableau
console.log(monTableau[monTableau.length-1]); //afficher le dernier élélment pour un tableau de longueur inconnue

//transforme mon tableau en chaîne de caractères, on utilise:
console.log(monTableau.join(''));

//transforme une chaine de caractère en tableau
let maChaine = "Hello World !";
console.log(maChaine.split(''));

//ajout d'un élément au début
monTableau.unshift('Elément du début');

// ajout d'un élémént à la fin
monTableau.push('Elément à la fin');

//supprime l'élément de la fin
monTableau.pop();

//supprime l'élément du début
monTableau.shift();
*/

//let couleurs = ["bleu","jaune","rouge","vert","violet"];

//for (let i= 0; i < couleurs.length; i++) {
  //console.log(couleurs[i])
//} // affiche chaque element du tableau

/*
couleurs.forEach(function(couleur) {
  console.log(couleur)
})

for (let i in couleurs) {
  console.log(couleurs[i])
}

for (let couleur of couleurs) {
  console.log(couleur)
}
*/

//0 pour le blanc
//1 pour le noir

/*
let jeuDeDames = [
  [0,1,0,1],
  [1,0,1,0],
  [0,1,0,1],
  [1,0,1,0]
];

jeuDeDames.forEach(function(ligne) {
  console.log(ligne);
}); //affiche chaque élément

console.log(jeuDeDames[0][0]); //affiche la premiere ligne et le premier element de la premiere ligne

jeuDeDames.forEach(function(ligne) {
  ligne.forEach(function(cellule){
    console.log(cellule);
  });
});

jeuDeDames [2].push(2 );
console.log(jeuDeDames); //ajoute élément à la ligne et dans la ligne

jeuDeDames[1].shift();
console.log(jeuDeDames); */

//Créer une fonction retournant ce tableau épuré des chiffres impaires
let monTableau = [1,5,1,0,2,8,5,2,5,9];

function chiffresPairs (monTableau) { //chiffrePairs est le nom de ma fonction et monTableau est l'argument, ce qui doit être discuté
  let result = []; //il faut pouvoir afficher un résultat
  monTableau.forEach(function(chiffre) { //pour chaque chiffre (chiffre qu'on défini ici) dans monTableau
    if (chiffre%2 == 0) {// si mon est exactement divisible par 2 ...
      result.push(chiffre);//... on recupère le résultat et...
    }
  });
  return result; //... on renvoi ce résultat
}

console.log(chiffresPairs(monTableau)); //on affiche le résultat de l'appel à la fonction chiffresPairs pour monTableau

uhn