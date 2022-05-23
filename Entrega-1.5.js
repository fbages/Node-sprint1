
///////////////1.5-NODE UTILS//////////////////////
//////////////nivell -1 Exercici1////////////////

function Exercici11(){
//Modules
const fs = require("fs"); //Carrega tot el module amb import fs from 'fs'; podria fer tree-shaking
const { join } = require("path");
const path = require("path");

//Constants
const NOMFITXER = "text.txt";
const RUTACARPETA = path.join(__dirname,"fitxers");
const RUTA = path.join(RUTACARPETA, NOMFITXER);

if(!fs.existsSync(RUTACARPETA)){
    fs.mkdirSync(RUTACARPETA);
}

let data = `Això es el text de l'exercici 1 del nivell 1 del Node Utils`;

fs.writeFile(RUTA, data, (err) => {
  if(err) throw console.log(err);
  console.log(`S'ha pogut escriure el fitxer`)
});
}

//////////////nivell -1 Exercici2////////////////
function Exercici12(){
//Modules
const fs = require("fs"); //Carrega tot el module amb import fs from 'fs'; podria fer tree-shaking
const { join } = require("path");
const path = require("path");

//Constants
const NOMFITXER = "text.txt";
const RUTACARPETA = path.join(__dirname, "fitxers");
const RUTA = path.join(RUTACARPETA, NOMFITXER);
console.log(RUTA);

fs.readFile(RUTA, 'utf8', (err,data) => { 
  if (err) throw console.log(err);
  console.log(data);
});

}

//////////////nivell -1 Exercici3////////////////
function Exercici13(){
    const fs = require('fs');
    const path = require("path");
    const { pipeline } = require('stream');
    const zlib = require('zlib');

//Constants
const NOMFITXER = "text.txt";
const RUTACARPETA = path.join(__dirname, "fitxers");
const RUTAFITXER = path.join(RUTACARPETA, NOMFITXER);
const RUTADESTI = path.join(RUTACARPETA,'comprimit.txt.gz');


//Readstream
const source = fs.createReadStream(RUTAFITXER,{encoding:'hex'});
const desti = fs.createWriteStream(RUTADESTI);

//Pipeline
/*
pipeline(source, zlib.createGzip(),desti,(err)=>{
    if (err) throw console.log(err);
    console.log(`Fitxer comprimit en la direcció ${RUTADESTI}`)
});
*/

//o per Pipe
source.pipe(zlib.createGzip()).pipe(desti);
}

//////////////nivell -2 Exercici1////////////////
function Exercici21(){
    const TXT = `Text repetit`;

function esperar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(TXT));
    }, 1000);
  });
}

async function imprimir() {
  while (true) {
    await esperar();
  }
}

imprimir();

}

//////////////nivell -2 Exercici2////////////////
function Exercici22(){
    //Modul pels executar subprocessos
    const { exec } = require('child_process');
    
    //Si el proces requereix de molts dades millor utilitzar spawn, ja que exec guardar en el buffer i ocupar memoria
    //Commands van lligats amb &
    exec('cd/ & dir', (err, stdout, stderr) => {
        if (err) console.log(err.message)
        if (stderr) console.log(stderr) //output secundari
        console.log(stdout);    //output primari
    })
}

//////////////nivell -3 Exercici1////////////////
function Exercici31(){
    
}

////////////////////////////EXECUCIO DELS EXERCICIS///////////////////////////

// // nivell 1 Exercici 1
// Exercici11();

// // nivell 1 Exercici 2
// Exercici12();

// // nivell 1 Exercici 3
// Exercici13();

// // nivell 2 Exercici 1
// Exercici21();

// // nivell 2 Exercici 2
Exercici22();

// // nivell 3 Exercici 1
// Exercici31();