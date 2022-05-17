let mesGran = resultat =>{
    console.log(`La potència del valor introduit és superior a 100 : ${resultat}`)
}

let mesPetit = resultat =>{
    console.log(`La potència del valor introduit és inferior a 100 : ${resultat}`)
}

const result = (input,cb)=>{
    const calcul = input ** 2;
    cb(calcul);
}

//Introduir un número més gran o petit de 10 per fer els dos casos
const input = 9;
//Evaluar quin callback escollir
mostrarResultat = (input >= 10)? mesGran : mesPetit;
result(input, mostrarResultat);