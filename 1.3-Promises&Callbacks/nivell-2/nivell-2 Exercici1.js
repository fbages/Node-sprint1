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
const cercaPerId = index => {
    const promesa1 = new Promise((resolve,reject)=>{
        if(index < employees.length){
            resolve(`Has buscat ${employees[index].name} i té un salari de ${salaries[index].salary}`)
        } else {
            reject(`Has escollit un index que no correspont a una persona de la llista, l'últim índex és ${employees.length-1}.`)
        }
    })
    return promesa1.then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
}

//Inicialitzacio de cerca
cercaPerId(0);