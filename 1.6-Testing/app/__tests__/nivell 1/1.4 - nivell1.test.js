const Exercici1 = require('../../1.4 - nivell1/Exercici1');

test(`Passat un index ha de tornar un employee`, async ()=>{
    const data = await Exercici1.cercaPerId(0);
    expect(data).toEqual(  {
        id: 1,
        name: "Linux Torvalds",
      })
})

test(`Passat un index fora de l'array ha de tornar: Has escollit un index que no correspont a una persona de la llista, l'últim índex és 2.`, async ()=>{
    expect.assertions(1);
    await expect(Exercici1.cercaPerId(5)).rejects.toMatch(`Has escollit un index que no correspont a una persona de la llista, l'últim índex és 2.`)
})

test(`Cerca salari per employee i retorna el seu salari`, async () => { //Ja que retorna una Promesa, el test l'hem de fer que evalui la promesa via async arrow function
    const data = await Exercici1.getSalary({ id: 3, name: "Jeff Bezos", });
  expect(data).toBe(2000); //Objectes es comparen amb toEqual or toMatch, mai com toBe
});

test(`Cerca salari per employee que no existeix, i retorna el catch `, async () => {
expect.assertions(1);
 await expect(Exercici1.getSalary({ id: 5, name: "Tomas Hide", })).rejects.toMatch("No existeix aquest employee");
// No funciona fer const data = await Exercici3.cercaPerId(5)
// expect(data).rejects.toMatch(....)
});