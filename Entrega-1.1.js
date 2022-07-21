///////////////1.1-FUNCIONS & TEMPLATE LITERALS//////////////////////
//////////////nivell -1 Exercici1////////////////
function imprimirnom(nom, cognom1, cognom2) {
  console.log("El teu nom és : " + nom, cognom1, cognom2);
}
imprimirnom("Francesc", "Bages", "Sabarich");

//////////////nivell -2 Exercici1////////////////

const NOM = `Francesc`;
const COGNOM1 = `Bages`;
const COGNOM2 = `Sabarich`;

console.log(`El teu nom és : ${NOM} ${COGNOM1} ${COGNOM2}`);

//////////////nivell -2 Exercici2////////////////

function imprimirValor(valor) {
    return valor
}
console.log(`El valor que s'ha introduit és : ${imprimirValor(7)}`);

//////////////nivell -3 Exercici1///////////////////

const matriuFuncions = [];

function omplirMatriu() {
  for (let i = 0; i < 10; i++) {
    matriuFuncions.push(() => {
      console.log(i);
    });
  }
}
//Generar la matriu amb 10 funcions
omplirMatriu();

//Crida 10 vegades la matriu amb les seves funcions
for (let j = 0; j < 10; j++) {
  matriuFuncions.forEach((element) => {
    element();
  });
  console.log(j);
}

///////////////nivell -3 Exercici2//////////////////////

const func = ((element) => {
  console.log(element);
})("Francesc");
