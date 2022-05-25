///////////////1.6-TESTING /////////////////////
//////////////nivell -1 Exercici1////////////////

const operacions = require('../../nivell 1/Operacions');

test('Suma : (3, 6, 42, 1) to equal 52', () => {
  expect(operacions.suma(3, 6, 42, 1)).toBe(52);
});

test('Resta : (60, 6, 42, 1) to equal 11', () => {
    expect(operacions.resta(60, 6, 42, 1)).toBe(11);
});

test('Multiplicar : (100, 1, 2, 0) should be Infinit', () => {
    expect(operacions.multiplicar(100, 1, 2, 3)).toBe(600)
})

test('Dividir : (3,0) should be Infinit', () => {
    expect(operacions.dividir(3, 0)).toBe("Infinit")
})

test('Dividir : (100, 1, 2, 5) should be Infinit', () => {
    expect(operacions.dividir(100, 1, 2, 5)).toBe(10)
})