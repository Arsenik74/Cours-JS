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
// Donne l'index.

array3.forEach((languages) => console.log(languages));
// a chaque tour loguera la valeur.

console.log(array3.every((language) => "Php"));
console.log(array3.some((language) => "Php"));

let shift = array3.shift();
// Permet d'enlever le premier élément..

console.log(array3.pop());
// Permet d'enlever le dernier élément..

const restArray = array3.splice(1, 1, "C++");
console.log(array3);

// IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y));
// Dans cet exemple permet de calculer l'ensemble des number présents dans arrayNmuber.

arrayNumber.push("Coucou");

console.log(arrayNumber);
// Permet d'ajouter ce qu'on veut. Par exemple là on a ajouter coucou a arrayNumber.

// FILTER (filtrer), SORT (trier), MAP (lister les chosees, un peu comme un foreach)

console.log(arrayNumber.filter((number) => number > 10));
// En faisant ça on a filtré les number > 10 dans arrayNumber.
// console.log(arrayNumber.sort());

console.log(arrayNumber.sort((a, b) => b - a));
// En faisaint ça on vient de classer les chiffres du plus grand au plus petit. Si on aurait fait a - b ça aurait été classé du plus petit au plus grand.

// arrayNumber.map((number) => (document.body.innerHTML += `<li> ${number}</li>`));

document.body.innerHTML = arrayNumber
  .map((number) => `<li> ${number}</li>`)
  .join("");
// en faisant join("") on a supprimé les virgules entre chaques number.

//-----------------
// Méthodes Objects
// ----------------

document.body.innerHTML = data
  .filter((user) => user.pseudo.includes("i"))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
<div class="user-card">
<h2>${user.pseudo}</h2>
<p> Age : ${user.age}</p>
<p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
</div>
`
  )
  .join("");

// En faisant le sort on a classé l'age des utilisateurs en décroissant. Avec map on a lister les utilisateurs. Avec les guillements de la touche 7 on concatene les divers choses que l'on veut. Pour afficher si l'utilisateur est un membre ou un admin on fait une terner, dans l'exemple user.admin ? -> si tu es vrai affiche moi "modérateur" : ->sinon affiche "membre".

// -----------------
// Les dates
// -----------------

// Date classique
let date = new Date();
console.log(date);
// Donne la date du jour...

// Timestamp
let timestamp = Date.parse(date);
console.log(timestamp);

// IsoString

console.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

console.log(dateParser(date));

// ----------------
// Destructuring
// ----------------

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;
console.log(destVar);
