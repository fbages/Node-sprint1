// Input
const input = require("./fitxer.json");
const employees = input.employees;
const salaries = input.salaries;

//Funcio getEmployee
const cercaPerId = (index) => {
  return new Promise((resolve, reject) => {
    const employee = employees.find((employee) => employee.id === index);

    if (employee) {
      resolve(employee);
    } else {
      reject(`No existeix aquest empleat`);
    }
  });
};

//funcio getSalary
let index;
const getSalary = (employee) => {
  //console.log(employee);
  return new Promise((resolve, reject) => {
    let salaryEmployee = salaries.find((salary) => salary.id === employee.id);
    if (salaryEmployee == undefined) {
      reject(console.log(`No hi ha cap objecte a employees com l'introduit`));
    } else {
      resolve(salaryEmployee.salary);
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

buscarEmpleat(1);

module.exports = {
  buscarEmpleat,
  cercaPerId,
  getSalary,
};
