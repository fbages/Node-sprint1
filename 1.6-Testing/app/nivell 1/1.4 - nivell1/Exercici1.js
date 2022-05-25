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
        `Has escollit un index que no correspont a una persona de la llista, l'últim índex és ${employees.length - 1
        }.`
      );
    }
  });
};

//Inicialitzacio de cerca
// cercaPerId(0);

//funcio getSalary
let index;
const getSalary = (employee) => {
  //console.log(employee);
  return new Promise((resolve, reject) => {
    if (employee == undefined) {
      reject(`No hi ha cap objecte a employees com l'introduit`);
    } else {
      let i = 0;
      employees.map((item) => {
        const resultat = item.id == employee.id ? employee.id : -1;
        //console.log(resultat);
        i++;
        if (resultat != -1) {
          index = resultat - 1;
          resolve(salaries[index].salary);
        }
        if (i == employees.length) reject(`No existeix aquest employee`);
      });
    }
  });
};

//Inicialitzacio de cerca
async function buscarEmpleat(valor) {
  try {
    const empleat = await cercaPerId(valor);
    const salari = await getSalary(empleat);
    console.log(`${empleat.name} té un salari de : ${salari}`);
  } catch (e) {
    console.error(e);
  }
}

buscarEmpleat(5);

module.exports = {
  buscarEmpleat,
  cercaPerId,
  getSalary
}