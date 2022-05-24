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
let cotxe = function (marca){
    this.model = marca;
}

let cotxeJoan = new cotxe("Hyundai");
let cotxeMarta = new cotxe("Seat");
let cotxeFrancesc = new cotxe("VW");

console.log(cotxeMarta);
