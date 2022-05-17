async function funcAsync(segons) {
  const resultatPromise = await funcPromise(segons);
  //No s'executa fins que el await superior s'ha resolt
  console.log(
    `Despres d'esperar ${segons} milisegons, s'ha executat ${resultatPromise}`
  );
}

function funcPromise(segons) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("La Promesa");
    }, segons);
  });
}

//Segons a esperar que s'executi la Promise
const segons = 2;
funcAsync(segons * 1000);
