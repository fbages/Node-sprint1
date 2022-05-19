//Modules
const fs = require("fs"); //Carrega tot el module amb import fs from 'fs'; podria fer tree-shaking
const { join } = require("path");
const path = require("path");

//Constants
const NOMFITXER = "text.txt";
const RUTACARPETA = path.join(__dirname, "fitxers");
const RUTA = path.join(RUTACARPETA, NOMFITXER);
console.log(RUTA);

fs.readFile(RUTA, 'hex', (err,data) => { //utf8 passar d'hexadecimal a string
  if (err) throw console.log(err);
  console.log(data);
});

