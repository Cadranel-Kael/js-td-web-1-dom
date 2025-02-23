// 01-DOM : DÉCOUVREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 1 : afficher l'enfant d'un objet du DOM
Déclarez la fonction afficherEnfant afin que le reste du programme fonctionne correctement.
AIDES : 
	La fonction afficherEnfant affiche un enfant d'un objet du DOM
	Le paramètre noeud est l'objet du DOM
	Le paramètre indice est l'indice de l'enfant à afficher
*/

// Insérez votre code ici

const afficherEnfant = function (node, index) {
    if (index < 0 || index > node.childNodes.length) {
            console.error('Indice incorrect');
    } else if (node.nodeType !== document.ELEMENT_NODE) {
            console.error('Type de noeud incorrect')
    } else {
            console.log(node.childNodes[index]);
            return node.childNodes[index];
    }
    return '';
}


// Doit afficher le noeud h1
afficherEnfant(document.body, 1);

// Doit afficher l'erreur "Indice incorrect"
// L'indice demandé est négatif
afficherEnfant(document.body, -1);

// Doit afficher l'erreur "Indice incorrect"
// Le noeud body à moins de 9 noeuds enfants
afficherEnfant(document.body, 8);

// Doit afficher l'erreur "Type de noeud incorrect"
// Le premier noeud enfant de body est textuel et n'a donc pas d'enfants
afficherEnfant(document.body.childNodes[0], 0);