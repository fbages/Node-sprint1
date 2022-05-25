//Funcio creadora
class Cotxe{
    constructor(marca){
        if(this.constructor === Cotxe){
            throw new Error("No es pot crear una clase abstracta");
        };
        this.model = marca;
    }
    getmodel() {
        throw new Error("No es pot accedir al metode d'una clase abstracta directament");
        }
}

class CotxeEuropeu extends Cotxe {
    getmodel() {
        return this.model = "Model europeu";
    }
}

let cotxeJoan = new CotxeEuropeu("Fiat");
let cotxeMarta = new CotxeEuropeu("Seat");
let cotxeFrancesc = new CotxeEuropeu("VW");
// let cotxeRamon = new Cotxe('Opel') //No deixa crear 
console.log(cotxeMarta.getmodel());

module.exports={
    Cotxe,
    CotxeEuropeu
}