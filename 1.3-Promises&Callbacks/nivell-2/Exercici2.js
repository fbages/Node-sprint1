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
  const promesa1 = new Promise((resolve, reject) => {
    if (index < employees.length) {
      resolve(
        `Has buscat ${employees[index].name} i té un salari de ${salaries[index].salary}`
      );
    } else {
      reject(
        `Has escollit un index que no correspont a una persona de la llista, l'últim índex és ${
          employees.length - 1
        }.`
      );
    }
  });
  return promesa1
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

//funcio getSalary
let index;
const getSalary = (employee) => {
  const promesa2 = new Promise((resolve, reject) => {
    if(employee == undefined){
        reject(console.log(`No hi ha cap objecte a employees com l'introduit`));
    } else {

        employees.map((item) => {
            const resultat = item.id == employee.id ? employee.id : -1;
            //console.log(resultat);
            if (resultat != -1) {
                index = resultat - 1;
                resolve(index);
            }
        });
    };
    
  });
  return promesa2
    .then((res) => {
      console.log(
        `has trobat l'usuari i té un salari de ${salaries[index].salary}`
      );
    })
    .catch((res) => {
        //console.log(res);
    });
};

//Inicialitzacio de cerca
getSalary(employees[2]);
