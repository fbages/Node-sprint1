const Exercici3 = require('../../1.3 - nivell2/Exercici3');

// expect(response).rejects assumes response to be a Promise. However, you're already using await, so response is not a Promise - it is the resolution value of that promise.
// Remove the await, or (if you're getting a response rather than a promise rejection) keep the await but stop matching on .rejects.

// If you decide to keep using expect(...).rejects, you may need to await the assertion:

test(`Cerca per Id 0 i retorna index d'employes`, async () => { //Ja que retorna una Promesa, el test l'hem de fer que evalui la promesa via async arrow function
  const data = await Exercici3.cercaPerId(0);
  expect(data).toEqual({ id: 1, name: "Linux Torvalds", }); //Objectes es comparen amb toEqual or toMatch, mai com toBe
});


test(`Cerca per Id 5 i retorna el catch `, () => {
  expect.assertions(1);
  expect(Exercici3.cercaPerId(5)).rejects.toMatch("Has escollit un index que no correspont a una persona de la llista, l'últim índex és 2.");
// No funciona fer const data = await Exercici3.cercaPerId(5)
// expect(data).rejects.toMatch(....)
});

test(`Cerca salari per employee i retorna el seu salari`, async () => { //Ja que retorna una Promesa, el test l'hem de fer que evalui la promesa via async arrow function
    const data = await Exercici3.getSalary({ id: 3, name: "Jeff Bezos", });
  expect(data).toBe(2000); //Objectes es comparen amb toEqual or toMatch, mai com toBe
});

test(`Cerca salari per employee que no existeix, i retorna el catch `, () => {
  expect.assertions(1);
 expect(Exercici3.getSalary({ id: 5, name: "Tomas Hide", })).rejects.toMatch("No existeix aquest employee");
// No funciona fer const data = await Exercici3.cercaPerId(5)
// expect(data).rejects.toMatch(....)
});
