const Exercici1 = require('../../1.4 - nivell2/Exercici1');

function continuouslyAdvanceTimers() {
    let isCancelled = false;
  
    async function advance() {
      while (!isCancelled) {
        jest.runOnlyPendingTimers();
        await new Promise(r => _setTimeout(r, 1));
      }
    }
  
    advance();
    return () => {
      isCancelled = true;
    };
  }


test(`Donats 3 valors ha de calcular el doble de cada un i sumar-los, 20,13,4`, async ()=>{

    jest.useFakeTimers(); // No funciona amb promeses
    
   jest.spyOn(global, 'setTimeout');
    await expect(Exercici1.dobles(20,13,4)).toMatch(`La suma total és : ` + 74);
})

test(`Donat que un dels valors sigui lletra, ha de fallar el test`, async ()=>{
    const data = await Exercici1.dobles(20,13,"a");
    expect(data).toMatch(`No son tots números`)
})

