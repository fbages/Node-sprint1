function fersegura(fn, errorHandler) {
  return function () {
    fn().catch(errorHandler);
  };
}

function handleError(err) {
  console.log("!!!!Hi hagut un error!!!!");
  console.log(err);
}

function funcCalcul(valor) {
  return new Promise((resolve, reject) => {
    if (valor < 0) {
      reject(`Aquest valor, ${valor}, és inferior a 0`);
    } else if (typeof valor != "number") {
      reject(`Aquest valor, ${valor}, ha de ser un número`);
    }
    setTimeout(() => {
      resolve(valor * 2);
    }, 2000);
  });
}

async function funcDoble(valor) {
  const resultat = await funcCalcul(valor).catch(handleError);
  console.log(`El doble de ${valor} és ${resultat}`);
  return resultat;
}

//funcDoble(100);

async function dobles(valor1, valor2, valor3) {
  try {
    let suma = 0;
    suma += await funcDoble(valor1).catch(handleError);
    console.log(suma);
    suma += await funcDoble(valor2).catch(handleError);
    console.log(suma);
    suma += await funcDoble(valor3).catch(handleError);
    console.log(suma);
    return console.log(`La suma total és : ${suma}`);
  } catch (handleError) {
    //return console.log(`La suma no és pot fer perquè hi ha un número d'input incorrecte`);
    //console.log(handleError)
  }
}

//dobles(0, 13, 4)

//funcio segura
const safedobles = fersegura(dobles(-1, 13, 4), handleError);
