//Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true; // ou false
let maVariable; // type undefined

// Tableaux

let array = ["Bordeaux", "Toulouse", "Nantes"];

// console.log(array[0][3]);

// Dans un objet on met des ()
// Dans un Array on met des []

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// console.log(array2[4].nom);

let objet = {
  pseudo: "Arsenik74",
  age: 32,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Arsenik74",
    age: 32,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nicolas",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

//---------------------------
// Les structures de controle
//---------------------------

if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  console.log(data[0].pseudo + " est plus jeune que " + data[1].pseudo);
}

// if (valeur à tester)
// valeur si vrai
// else
// valeur si faux

// While

let w = 0;

while (w < 10) {
  w++;
  //   console.log("la valeur de w est de : " + w);
}

//  Do while

let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for

for (const user of data) {
  document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

//  on déclare la veleur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie.
for (i = 0; i < data.length; i++) {
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

// Le switch

document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.backgroundColor = "yellow";
      break;
    case "php":
      document.body.style.backgroundColor = "purple";
      break;
    case "python":
      document.body.style.backgroundColor = "blue";
      break;
    default:
      null;
  }
});

//  Méthodes String

let string2 = "Javascript est un langage orienté objet";

console.log(eval("1" + 2));
// il va trouver 12 car le 1 est un string.
console.log(eval(parseInt("1") + 2));
//  parseInt permet de changer un string en number.
console.log(typeof parseInt("42"));

console.log(isNaN(string));
// NaN -> Not a number.
console.log(string2.length);
// Donne la longueur de la chose demandé. Les espaces comptent.

console.log(string2.indexOf("langage")); // Retourne -1 si il ne connait pas.

let newString = string2.slice(2);
console.log(newString);
// Permet de couper, par exemple dans notre cas la console affichera "vascript est un langage orienté objet"

console.log(string2.split(" "));

console.log(string2.toLowerCase());
console.log(string2.toUpperCase());
// Permet de mettre en majuscule ou en minuscule
console.log(string2.replace("Javascript", "PHP"));
// Permet de remplacer du texte par un autre. Dans notre exemple ça remplacera Javascript par pHP.

// Methodes Numbers

let number2 = 42.1234;
let numberString = "42.23 est un chiffre";
console.log(number2.toFixed(2));
//  En faisant ça la console nous renverra 42.12 et non 42.1234
console.log(parseInt("43"));
//  change une chaine de caractères en number

console.log(parseFloat(numberString));
// parseFloat prend même les chiffres après la virgule.

// Math

console.log(Math.PI); // produit PI
console.log(Math.round); // Arrondi par exemple si on met 4.5 il arrondira à 5
console.log(Math.floor(4.9));
// arrondi au plus bas
console.log(Math.ceil(4.1));
// arrondi au plus haut
console.log(Math.pow(2, 7));
// puissance
console.log(Math.sqrt(16));
// racine carré

console.log(Math.random() * 50);
// Donnera un chiffre entre 0 et 50.

console.log(Math.floor(Math.random() * 50));
// Donnera un chiffre plein entre 0 et 50.

//---------------
// Methodes Array
// --------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);

// console.log(newArray);

let newArray = [...array3, ...array4];

console.log(newArray);

// Avec cette méthode on concatene deux tableaux ensemble.

console.log(array3.join(" "));
// on crée une chaine de caractères avec dans l'exemple un espace. On peut mettre ce qu'on veut...

// console.log(array3.slice(1));
console.log(newArray.slice(3, 5));
// garde les éléments présent entre les accolades. Dans l'exemple le log affichera Ruby et solidity.

console.log(array3.indexOf("Python"));
