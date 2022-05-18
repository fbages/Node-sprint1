async function funcAsync(segons) {
  try{
    const resultatPromise = await funcPromise(segons);
    //No s'executa fins que el await superior s'ha resolt
    console.log(
      `Despres d'esperar ${segons} milisegons, s'ha executat ${resultatPromise}`
      );
    }catch (err){
        console.log(`No s'ha pogut fer el càlcul`)
    }
}

function funcPromise(segons) {
  return new Promise((resolve, reject) => {
    try{
      if(segons < 0){
        reject(console.log(`No s'ha pogut executar per falta de temps`));
      } else if(typeof segons !== 'number'){
        reject(console.log(`El valor introduït no és un número`));
      }
      setTimeout(() => {
        resolve("La Promesa");
      }, segons);
    }catch (err){
      console.log(err);
    }
    });
}

//Segons a esperar que s'executi la Promise
const segons = 3;
funcAsync(segons * 1000);
