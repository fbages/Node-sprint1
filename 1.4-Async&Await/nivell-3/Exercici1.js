function funcCalcul(valor) {
  return new Promise((resolve, reject) => {
    if (valor < 0) {
      reject(console.log(`Aquest valor és inferior a 0`));
    } else if (typeof valor != "number") {
      reject(console.log(`Aquest valor ha de ser un número`));
    }
    setTimeout(() => {
      resolve(valor * 2);
    }, 2000);
  });
}

async function funcDoble(valor) {
  const resultat = await funcCalcul(valor);
  console.log(`El doble de ${valor} és ${resultat}`);
  return resultat;
}

//funcDoble(100);

async function dobles(valor1, valor2, valor3) {
  try {
    let suma = 0;
    suma += await funcDoble(valor1);
    console.log(suma);
    suma += await funcDoble(valor2);
    console.log(suma);
    suma += await funcDoble(valor3);
    console.log(suma);
    return console.log(`La suma total és : ${suma}`);
  } catch (err) {
    return console.log(`La suma no és pot fer perquè hi ha un número d'input incorrecte`);
  }
}

dobles(0, 13, 4)//.catch((err) => console.log(err));
