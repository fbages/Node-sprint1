const fs = require('fs');
const path = require("path");
const { pipeline } = require('stream');
const zlib = require('zlib');

//Constants
const NOMFITXER = "text.txt";
const RUTACARPETA = path.join(__dirname, "fitxers");
const RUTAFITXER = path.join(RUTACARPETA, NOMFITXER);
const RUTADESTI = path.join(RUTACARPETA,'comprimit2.txt.gz');


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