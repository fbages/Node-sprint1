const Exercici1 = require('../../nivell 1/1.4 - nivell2/Exercici1');

//No funciona més amb l'útima versió de JEST
/*
jest.useFakeTimers(); 
jest.spyOn(global, 'setTimeout');

test(`Donats 3 valors ha de calcular el doble de cada un i sumar-los, 20,13,4`, async ()=>{

    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10);
    await expect(Exercici1.dobles(20,13,4)).toMatch(`La suma total és : ` + 74);
})
*/
test(`Donat que un dels valors sigui lletra, ha de fallar el test`, async ()=>{
    const data = await Exercici1.dobles("a",13,"a");
    expect(data).toMatch(`No son tots números`)
})

