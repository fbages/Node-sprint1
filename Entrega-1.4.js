///////////////1.4-ASYNC & AWAIT/////////////////////
//////////////nivell -1 Exercici1////////////////

// Input

let employees = [
    {
      id: 1,
      name: "Linux Torvalds",
    },
    {
      id: 2,
      name: "Bill Gates",
    },
    {
      id: 3,
      name: "Jeff Bezos",
    },
  ];
  
  let salaries = [
    {
      id: 1,
      salary: 4000,
    },
    {
      id: 2,
      salary: 1000,
    },
    {
      id: 3,
      salary: 2000,
    },
  ];
  
  //Funcio getEmployee
  const cercaPerId = (index) => {
    return new Promise((resolve, reject) => {
      if (index < employees.length) {
        resolve(employees[index]);
      } else {
        reject(
          `Has escollit un index que no correspont a una persona de la llista, l'últim índex és ${
            employees.length - 1
          }.`
        );
      }
    });
  };
  
  //funcio getSalary
  let index;
  const  getSalary = (employee) => {
    return new Promise((resolve, reject) => {
      if (employee == undefined) {
        reject(console.log(`No hi ha cap objecte a employees com l'introduit`));
      } else {
        employees.map((item) => {
          const resultat = item.id == employee.id ? employee.id : -1;
          //console.log(resultat);
          if (resultat != -1) {
            index = resultat - 1;
            resolve(salaries[index].salary);
          }
        });
      }
    });
  };
  
  //Funcio buscar empleat
async function buscarEmpleat(valor){
    const empleat = await cercaPerId(valor);
    const salari = await getSalary(empleat);
    console.log(`${empleat.name} té un salari de : ${salari}`);
    }
  
 

//////////////nivell -1 Exercici2////////////////
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
  

  
//////////////nivell -2 Exercici1////////////////
  function funcCalcul(valor){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(valor * 2)
        },2000);
    })
}

async function funcDoble(valor){
    const resultat = await funcCalcul(valor);
    console.log(`El doble de ${valor} és ${resultat}`)
    return resultat;
}

//funcDoble(100);

async function dobles(valor1, valor2, valor3){
    let suma = 0;
    suma += await funcDoble(valor1);
    console.log(suma);
    suma += await funcDoble(valor2);
    console.log(suma);
    suma += await funcDoble(valor3);
    console.log(suma);
    return console.log(`La suma total és : ${suma}`);
}



//////////////nivell -3 Exercici1////////////////
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
  


  ////////////////////////////EXECUCIO DELS EXERCICIS///////////////////////////

  //nivell 1 Exercici 1
    // buscarEmpleat(0);

  //nivell 1 Exercici 2
    // funcAsync(3 * 1000);  //Milisegons a esperar que s'executi la Promise

  //nivell 2 Exercici 1
    // dobles(20,13,4); //Suma de dobles

  //nivell 3 Exercici 1
     const safedobles = fersegura(dobles(-1, 13, 4), handleError);   //funcio segura