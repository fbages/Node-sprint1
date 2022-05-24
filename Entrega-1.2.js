///////////////1.2-CLASSES & ARROW FUNCTIONS/////////////////////
//////////////nivell -1 Exercici1////////////////

const resultat = ((a,b)=>{return (a+b)})(2,3)
console.log(resultat);

//////////////nivell -2 Exercici1////////////////
const result = (valor)=>{
    let obj = {
        color : valor,
    };
    return obj;
}

console.log(result("Blau"));

//////////////nivell -2 Exercici2////////////////
class Persona{
    constructor(nom){
        this.nom = nom
    }

    dirNom(){
       return this.nom;
    }
}

const usuari1 = new Persona("Francesc");

console.log(usuari1.dirNom());

//////////////nivell -3 Exercici1////////////////
//Funcio creadora
class Cotxe{
    constructor(marca){
        if(this.constructor === Cotxe){
            throw new Error("No es pot crear una clase abstracta");
        };
        this.model = marca;
    }
    getmodel() {
        throw new Error("No es pot crear una clase abstracta");
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
