const Exercici1 = require('../../1.4 - nivell2/Exercici1');

test(`Donats 3 valors ha de calcular el doble de cada un i sumar-los, 20,13,4`, async ()=>{
    const data = await Exercici1.dobles(20,13,4);
    expect(data).toMatch(`La suma total és : ` + 74);
})

test(`Donat que un dels valors sigui lletra, ha de fallar el test`, async ()=>{
    const data = await Exercici1.dobles(20,13,"a");
    expect(data).toMatch(`No son tots números`)
})

