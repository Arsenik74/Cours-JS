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
