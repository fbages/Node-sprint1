import 'jest';
// const employees = [
//     {
//       "id": 1,
//       "name": "Linux Torvalds"
//     },
//     {
//       "id": 2,
//       "name": "Bill Gates"
//     },
//     {
//       "id": 3,
//       "name": "Jeff Bezos"
//     }
//   ];

// const salaries = [
//     {
//       "id": 1,
//       "salary": 4000
//     },
//     {
//       "id": 2,
//       "salary": 1000
//     },
//     {
//       "id": 3,
//       "salary": 2000
//     }
//   ]
// NO funciona com a module!!!!!
const employees = jest.fn().mockReturnValue({
  "id": 1,
  "name": "Linux Torvalds"
});

const salaries = jest.fn().mockReturnValue({
  "id": 1,
  "salary": 4000
});

const mockEmployeeSalaries = jest.mock('../nivell 3/fitxer.json')
module.exports = {
  mockEmployeeSalaries
}
