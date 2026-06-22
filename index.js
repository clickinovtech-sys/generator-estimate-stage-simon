// const supp = document.querySelector(".test-delete");
// const le = document.querySelector(".ecrit");
// const add = document.querySelector(".test-add");
// console.log("test");

// add.addEventListener("click", () => {
//   le.innerHTML = "nouveau test";
//   supp.style.display = "block";
//   add.style.display = "none";
// });

// supp.addEventListener("click", () => {
//   le.innerHTML = "";
//   add.style.display = "block";
//   supp.style.display = "none";
// });
// const cars = ["Saab", "Volvo", "BMW", "Renault", "Peugeot"];
// const plus = document.querySelector(".plus");
// const moins = document.querySelector(".moins");
// const number = document.querySelector(".number");
// const body = document.querySelector("body");
// const tableau = document.querySelector(".tableau");
// let nombre = 0;
// number.innerHTML = nombre;

// tableau.innerHTML = cars[0];

// plus.addEventListener("click", () => {
//   nombre++;
//   if (nombre == cars.length) {
//     nombre = 4;
//   }
//   number.innerHTML = nombre;
//   tableau.innerHTML = cars[nombre];
//   if (nombre >= 11) {
//     body.style.backgroundColor = "red";
//   }
// });

// moins.addEventListener("click", () => {
//   if (nombre <= 0) {
//     nombre = 0;
//   } else {
//     nombre--;
//   }
//   number.innerHTML = nombre;
//   if (nombre <= 10) {
//     body.style.backgroundColor = "white";
//     tableau.innerHTML = cars[nombre];
//   }
// });

// console.log(cars.length);

// const leInput = document.querySelector(".le-input");
// const affichageDuTexte = document.querySelector(".affichage-du-texte");

// leInput.addEventListener("input", () => {
//   affichageDuTexte.innerHTML = leInput.value;
//   if (leInput.value === "") {
//     affichageDuTexte.innerHTML = "Le texte apparaitra ici...";
//   }
// });

// const ChangeCouleur = document.querySelector("#choix_couleur");

// ChangeCouleur.addEventListener("input", () => {
//   affichageDuTexte.style.color = ChangeCouleur.value;
//   console.log(ChangeCouleur.value);
// });

// const taille = document.querySelectorAll(".radio-taille");
// taille.forEach((element) => {
//   element.addEventListener("change", () => {
//     affichageDuTexte.style.fontSize = element.value;
//     console.log(element.value);
//   });
// });

// const deco = document.querySelectorAll(".radio-deco");
// deco.forEach((element) => {
//   element.addEventListener("change", () => {
//     affichageDuTexte.style.textDecoration = element.value;
//     console.log(element.value);
//   });
// });

// const couleurs = [
//   "crimson", // Rouge vif
//   "darkorange", // Orange
//   "gold", // Jaune/Or
//   "forestgreen", // Vert
//   "dodgerblue", // Bleu royal
//   "rebeccapurple", // Violet
//   "hotpink", // Rose flashy
//   "teal", // Bleu-vert / Turquoise sombre
//   "slategray", // Gris ardoise
//   "saddlebrown", // Marron
//   "",
// ];

// const title = document.querySelector(".titre");
// let bg = document.querySelector("body");
// let i = 10;
// bg.style.backgroundColor = couleurs[i - 1];

// let intervalColor = setInterval(() => {
//   i--;
//   console.log(couleurs[i - 1]);
//   bg.style.backgroundColor = couleurs[i - 1];
//   if (i < 0) {
//     i = 0;
//     clearInterval(intervalColor);
//   }

//   if (i === 0) {
//     bg.style.backgroundColor = "black";
//   }
//   title.innerHTML = i;
// }, 1000);
