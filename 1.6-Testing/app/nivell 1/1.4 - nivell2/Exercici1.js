async function funcCalcul(valor) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(valor * 2)
        }, 2000);
    })
}

async function funcDoble(valor) {
    try {
        if (typeof valor === 'number') {
            const resultat = await funcCalcul(valor);
            //console.log(`El doble de ${valor} és ${resultat}`)
            return resultat;
        } else {
            console.error("no es un numero");
        }
    } catch (err) {console.log("no es un numero") }
}

async function dobles(valor1, valor2, valor3) {
    try {
        let valorsValids = validValor(valor1)*validValor(valor2)*validValor(valor3);
        if(valorsValids){
            let suma = 0;
            suma += await funcDoble(valor1);
            //console.log(suma);
            suma += await funcDoble(valor2);
           // console.log(suma);
            suma += await funcDoble(valor3);
           // console.log(suma);
            return (`La suma total és : ${suma}`);
        } else {
            return ("No son tots números")
        }
    } catch (err) {
        console.log(err);
    }
}

function validValor(valor){
    if(typeof valor == 'number'){
        return true;
    } else {
        return false;
    }
}

//////INICI////////////////
// (async function principal(){
//     let resultat = await dobles(20, 13, 3);
//     console.log(resultat);

// })()


module.exports = {
    dobles,
    funcDoble,
    funcCalcul
}