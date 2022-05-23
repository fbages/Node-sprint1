//Crear fitxers codificats
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

async function codificador(ruta) {
    
    const rutaHex = path.join(ruta,'/../','comprimitHex.txt.gz');

    const source = fs.createReadStream(ruta,{encoding:'hex'});
    const destiHex = fs.createWriteStream(rutaHex);
    source.pipe(zlib.createGzip()).pipe(destiHex);
    console.log(`Fitxer en Hex gravat`);
    
    const rutaBase64 = path.join(ruta,'/../','comprimitBase64.txt.gz');

    const sourceBase64 = fs.createReadStream(ruta,{encoding:'base64'});
    const destiBase64 = fs.createWriteStream(rutaBase64);
    sourceBase64.pipe(zlib.createGzip()).pipe(destiBase64);
    console.log(`Fitxer en Base 64 gravat`)
}

async function borrarOriginalsEncriptar(ruta){
    const rutaHex = path.join(ruta,'/../','comprimitHex.txt.gz');
    const rutaBase64 = path.join(ruta,'/../','comprimitBase64.txt.gz')
    const rutaCriptHex = path.join(ruta,'/../','comprimitHex.txt.gz.enc');
    const rutaCriptBase64 = path.join(ruta,'/../','comprimitBase64.txt.gz.enc');


    let key = '14189dc35ae35e75ff31d7502e245cd9bc7803838fbfd5c773cdcd79b8a28bbd';
    let cipher = crypto.createCipher('aes-256-cbc', key)
    
    const sourceCriptHex = fs.createReadStream(rutaHex);
    const destiCriptHex = fs.createWriteStream(rutaCriptHex);
    sourceCriptHex.pipe(cipher).pipe(destiCriptHex);
    
    const sourceCriptBase64 = fs.createReadStream(rutaBase64);
    const destiCriptBase64 = fs.createWriteStream(rutaCriptBase64);
    sourceCriptBase64.pipe(cipher).pipe(destiCriptBase64);

    fs.unlink(rutaHex,()=>{  console.log('Deleted');});
    fs.unlink(rutaBase64,()=>{ console.log('Deleted');});

}

async function desencreptarDescodificar(ruta){

}


async function principal(ruta){
    await codificador(ruta);
    await borrarOriginalsEncriptar(ruta);
    await desencreptarDescodificar(ruta);
}

//////////MAIN////////////

const RUTA = path.join(__dirname, '/../', 'nivell-1', 'fitxers', 'text.txt');
console.log("/////////////INICI//////////////");
principal(RUTA);
console.log("/////////////FINAL//////////////");


