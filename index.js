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

const plus = document.querySelector(".plus");
const moins = document.querySelector(".moins");
const number = document.querySelector(".number");
const body = document.querySelector("body");
let nombre = 0;
number.innerHTML = nombre;
console.log(nombre);

plus.addEventListener("click", () => {
  nombre++;
  number.innerHTML = nombre;
  if (nombre >= 11) {
    body.style.backgroundColor = "red";
  }
});

moins.addEventListener("click", () => {
  nombre--;
  number.innerHTML = nombre;
  if (nombre <= 0) {
    nombre = 0;
  }
  if (nombre < 10) {
    body.style.backgroundColor = "white";
  }
});
