///////////////1.3-PROMISES & CALLBACKS/////////////////////
//////////////nivell -1 Exercici1////////////////

function Exercici11(ENTRADA) {

  const promesa1 = new Promise((resolve, reject) => {
    if (ENTRADA) {
      resolve("hola");
    } else {
      reject("adeu");
    }
  });

  promesa1
    .then((res) => {
      //resposta quan la promesa ja està completada
      console.log(`
    /////// Nivell 1 Exercici 1 //// El programa t'ha saludat amb una promesa, ${res}`);
    })
    .catch((err) => {
      //respesta error perquè no s'ha pogut fer la promesa
      console.log(`
    /////// Nivell 1 Exercici 1 //// El programa no ha resolt la promesa i t'ha rejectat, ${err}`);
    });
}

//////////////nivell -1 Exercici2////////////////

function Exercici12(input){

  let mesGran = (resultat) => {
    console.log(`
    /////// Nivell 1 Exercici 2 //// La potència del valor introduit és superior a 100 : ${resultat}`);
  };
  
  let mesPetit = (resultat) => {
  console.log(`
  /////// Nivell 1 Exercici 2 //// La potència del valor introduit és inferior a 100 : ${resultat}`);
};

const result = (input, cb) => {
  const calcul = input ** 2;
  cb(calcul);
};

//Evaluar quin callback escollir
mostrarResultat = input >= 10 ? mesGran : mesPetit;
result(9, mostrarResultat);
}

//////////////nivell -2 Exercici1////////////////

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
const getEmployee = (index) => {
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

//////////////nivell -2 Exercici2////////////////

//funcio getSalary
let index;
const getSalary = (employee) => {
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

//////////////nivell -2 Exercici3////////////////

//Inicialitzacio de cerca
function Exercici23() {
  getEmployee(1).then((res) => {
    getSalary(res)
      .then((res1) => {
        console.log(
          `
        //////////// Nivell 2 Exercici 3 /////////`,
          `${res.name} té un sou de ${res1}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

//////////////nivell -3 Exercici1////////////////

//Inicialitzacio de cerca
function Exercici31() {
  getEmployee(4)
    .then((res) => {
      getSalary4(res)
        .then((res1) => {
          console.log(`${res.name} té un sou de ${res1}`);
        })
        .catch((err) => {
          console.log(err);
        });
    })

    .catch((err) => {
      console.log(
        `
      //////////// Nivell 3 Exercici 1 /////////`,
        err
      );
    });
}

////////////////////////////EXECUCIO DELS EXERCICIS///////////////////////////

//nivell 1 Exercici 1
Exercici11(true); //false per fer reject

// //nivell 1 Exercici 2
// Exercici12(9); //Introduir un número més gran o petit de 10 per fer els dos casos

// //nivell 2 Exercici 1
// console.log(getEmployee(0));

// //nivell 2 Exercici 2
// console.log(getSalary(employees[2]));

// //nivell 2 Exercici 3
// Exercici23();

// //nivell 3 Exercici 1
// Exercici31();
