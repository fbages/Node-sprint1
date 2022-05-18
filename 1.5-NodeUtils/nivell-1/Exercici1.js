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

let data = `Exercici 1 del nivell 1 del Node Utils`;

fs.writeFile(RUTA, data, (err) => {
  if(err) throw console.log(err);
  console.log(`S'ha pogut escriure el fitxer`)
});

