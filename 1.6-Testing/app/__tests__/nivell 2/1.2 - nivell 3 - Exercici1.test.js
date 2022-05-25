const Exercici1 = require("../../nivell 2/1.2 - nivell3/Exercici1");
const Cotxe = require("../../__mocks__/Cotxe");
const CotxeEuropeu = require("../../__mocks__/CotxeEurepeu");

jest.mock("../../__mocks__/Cotxe");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  //Cotxe.CotxeEuropeu.mockClear();
  Cotxe.Cotxe.mockClear();
});

test("Test per veure que no inicialitzem class Cotxe constructor", () => {
  // Show that mockClear() is working:
  expect(Cotxe.Cotxe).not.toHaveBeenCalled();
});

test("Test per veure que inicialitzem class CotxeEuropeu constructor", () => {
  const CotxeEu1 = new CotxeEuropeu.CotxeEuropeu("Buggati");
  expect(Cotxe.Cotxe).toHaveBeenCalledTimes(1);
});