///////////////1.6-TESTING /////////////////////
//////////////nivell -1 Exercici1////////////////

const operacions = require('../../Operacions');

test('Suma : [3, 6, 42, 1] to equal 52', () => {
  expect(operacions.suma([3, 6, 42, 1])).toBe(52);
});

test('Suma : 3 no és un Array', () => {
    expect(operacions.suma(3)).toBe("No és un array");
});

test('Resta : "asdfd" no és un Array', () => {
    expect(operacions.suma("asdfd")).toBe("No és un array");
});

test('Dividir : [3,0] should be Infinit', () => {
    expect(operacions.dividir([3, 0])).toBe("Infinit")
})

test('Dividir : [3,2,3] hi ha masses valors', () => {
    expect(operacions.dividir([3, 2,3])).toBe("Hi ha masses valors")
})

test('Dividir : [3] No hi ha suficients valors', () => {
    expect(operacions.dividir([3])).toBe("No hi ha suficients valors")
})


