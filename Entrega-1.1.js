///////////////1.1-FUNCIONS & TEMPLATE LITERALS//////////////////////
//////////////nivell -1 Exercici1////////////////
function Exercici11() {
  function imprimirnom(nom, cognom1, cognom2) {
    console.log("El teu nom és : " + nom, cognom1, cognom2);
  }
  imprimirnom("Francesc", "Bages", "Sabarich");
}

//////////////nivell -2 Exercici1////////////////
function Exercici21(){
    const NOM = `Francesc`;
    const COGNOM1 = `Bages`;
    const COGNOM2 = `Sabarich`;
    
    function imprimirnom(nom, cognom1, cognom2) {
        console.log(`El teu nom és : ${nom} ${cognom1} ${cognom2}`);
    }
    
    imprimirnom(NOM, COGNOM1, COGNOM2);
}
    
//////////////nivell -2 Exercici2////////////////
function Exercici22(){
    function imprimirValor(valor) {
        console.log(`El valor que s'ha introduit és : ${valor}`);
    }
    
    imprimirValor(7);
}

//////////////nivell -3 Exercici1///////////////////
function Exercici31(){
    const matriuFuncions = [];
    
    function omplirMatriu() {
        for (let i = 0; i < 10; i++) {
            matriuFuncions.push(() => {
                console.log(i);
            });
        }
    }
    //Generar la matriu amb 10 funcions
    omplirMatriu();
    
    //Crida 10 vegades la matriu amb les seves funcions
    for (let j = 0; j < 10; j++) {
        matriuFuncions.forEach((element) => {
            element();
        });
        console.log(`--Següent iteració--`);
    }
}
    
    ///////////////nivell -3 Exercici2//////////////////////
    function Exercici32(){
        const func = ((element) => {
            console.log(element);
    })("Francesc");
    }


////////////////////////////EXECUCIO DELS EXERCICIS///////////////////////////

// // nivell 1 Exercici 1
Exercici11();

// // nivell 2 Exercici 1
// Exercici21();

// // nivell 2 Exercici 2
// Exercici22();

// // nivell 3 Exercici 1
// Exercici31();

// // nivell 3 Exercici 2
// Exercici32();