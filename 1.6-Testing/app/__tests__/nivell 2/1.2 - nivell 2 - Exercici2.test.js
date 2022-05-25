const Exercici2 = require('../../nivell 2/1.2 - nivell2/Exercici2');
const nom = require('../../__mocks__/Persona')

jest.mock('../../__mocks__/Persona')


test(`Generar un objecte amb classe Persona a partir d'un mock`, ()=>{
    const usuari1 = new Exercici2.Persona(nom["nom"]);
    expect(usuari1.dirNom()).toBe("Ana");
})
