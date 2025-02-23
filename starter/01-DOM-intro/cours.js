// 01-DOM : DÉCOUVREZ LE DOM

/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501871-decouvrez-le-dom
- https://github.com/oc-courses/javascript-web
*/

// A. Premiers pas avec le DOM en JavaScript

// 1. Accéder au DOM avec la variable document
/* 
EXERCICE 1 : Afficher dans la console
- l'objet head du DOM (représentant l'élément <head>) 
- l'objet body du DOM (représentant l'élément <body>) 
- le titre du document
*/

/*
const heading = document.querySelector('h1');
const body = document.querySelector('body');
const title = document.querySelector('title');

console.log(heading);
console.log(body);
console.log(title)

*/

// 2. Découvrir le type d'un nœud
/*
Chaque objet du DOM à une propriété nodeType qui indique son type.
La valeur de cette propriété est document.ELEMENT_NODE (une constante qui vaut 1) pour un nœud "élément" (balise HTML)
et document.TEXT_NODE (une constante qui vaut 3) pour un nœud textuel.
Voir documentation sur le MDN : https://developer.mozilla.org/fr/docs/Web/API/Node/nodeType
*/
/* 
EXERCICE 2 : 
Tester si le nœud body est de type document.ELEMENT_NODE
- si oui, afficher "body est un noeud élément" ;
- sinon, afficher "body est un noeud textuel".
Afficher la valeur de la propriété nodeType du body dans la console
(N.B. pour comprendre le résultat affiché, voir la documentation du MDN sur nodeType
https://developer.mozilla.org/fr/docs/Web/API/Node/nodeType)
*/

const body = document.querySelector('body');

if (body.nodeType === document.ELEMENT_NODE) {
    console.log(`body est un noeud élément`);
} else {
    console.log(`body est un noeud textuel`);
}

// 3. Accéder aux enfants d'un nœud élément
/*
Chaque objet du DOM de type élément possède une propriétéchildNodes.
Il s'agit d'une collection ordonnée regroupant tous ses nœuds enfants sous la forme d'objets DOM.
On peut utiliser cette collection un peu comme un tableau pour accéder aux différents enfants d'un nœud.
*/
/* 
EXERCICE 3 : 
Accéder aux enfants d'un nœud. Afficher :
- le 1er enfant du noeud body ;
- le 2e enfant du noeud body ;
- tous les nœuds enfants du noeud body à l'aide d'une boucle ;
*/

// Affiche le premier enfant du noeud body

console.log(document.querySelector('body').childNodes[0]);

// Affiche le deuxième enfant du noeud body

console.log(document.querySelector('body').childNodes[1]);

// Affiche les noeuds enfants du noeud body

console.log(document.querySelector('body').childNodes);

// 4. Accéder au parent d'un nœud
/*
Chaque objet du DOM possède une propriété parentNode
qui renvoie son nœud parent sous la forme d'un objet DOM.
*/
/* 
EXERCICE 4 : 
Accéder au parent d'un nœud. Afficher 
- le parent du noeud h1 ;
- le parent du noeud document ;
*/

// Affiche le parent du noeud h1

console.log(document.querySelector('h1').parentNode[0])

// Accès au parent du noeud document ?
