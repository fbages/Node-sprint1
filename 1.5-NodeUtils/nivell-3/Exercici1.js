//Crear fitxers codificats
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
console.log(key, iv);

async function codificador(ruta) {
    return new Promise((resolve, reject) => {
        const rutaHex = path.join(ruta, '/../', 'comprimitHex.txt.gz');

        const source = fs.createReadStream(ruta, { encoding: 'hex' });
        const destiHex = fs.createWriteStream(rutaHex);
        source.pipe(zlib.createGzip()).pipe(destiHex);
        console.log(`Fitxer en Hex gravat`)

        destiHex.on('finish', () => {
            const rutaBase64 = path.join(ruta, '/../', 'comprimitBase64.txt.gz');

            const sourceBase64 = fs.createReadStream(ruta, { encoding: 'base64' });
            const destiBase64 = fs.createWriteStream(rutaBase64);
            sourceBase64.pipe(zlib.createGzip()).pipe(destiBase64);

            destiBase64.on('finish', () => {
                resolve(console.log(`Fitxer en Base 64 gravat`));
            })

        })



    })
}

async function encriptarBorrarOriginals(ruta) {
    return new Promise((resolve, reject) => {
        const rutaHex = path.join(ruta, '/../', 'comprimitHex.txt.gz');
        const rutaBase64 = path.join(ruta, '/../', 'comprimitBase64.txt.gz')
        const rutaCriptHex = path.join(ruta, '/../', 'comprimitHex.txt.gz.enc');
        const rutaCriptBase64 = path.join(ruta, '/../', 'comprimitBase64.txt.gz.enc');

        let cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let cipher2 = crypto.createCipheriv('aes-256-cbc', key, iv);

        const sourceCriptHex = fs.createReadStream(rutaHex);
        const destiCriptHex = fs.createWriteStream(rutaCriptHex);
        sourceCriptHex.pipe(cipher).pipe(destiCriptHex);


        destiCriptHex.on('finish', () => {
            sourceCriptHex.destroy();

            const sourceCriptBase64 = fs.createReadStream(rutaBase64);
            const destiCriptBase64 = fs.createWriteStream(rutaCriptBase64);
            sourceCriptBase64.pipe(cipher2).pipe(destiCriptBase64);

            destiCriptBase64.on('finish', () => {
                sourceCriptBase64.destroy();
            })

            
            sourceCriptBase64.on('end', () => {
                fs.unlink(rutaBase64, () => {
                    console.log('Deleted Base64');
                    resolve(console.log('encrypted'));
                });
            })
        })

        sourceCriptHex.on('end', () => {

            fs.unlink(rutaHex, () => {
                console.log('Deleted Hex');

            });
        })


    })
}

async function desencreptarDescodificar(ruta) {
    console.log("Començar a descifrar");
    return new Promise((resolve, reject) => {

        const rutaCriptHex = path.join(ruta, '/../', 'comprimitHex.txt.gz.enc');
        const rutaCriptBase64 = path.join(ruta, '/../', 'comprimitBase64.txt.gz.enc');
        const rutaHex = path.join(ruta, '/../', '1comprimitHex.txt.gz'); //Si té el mateix nom que l'anterior comprimit es queda penjat i no el genera
        const rutaBase64 = path.join(ruta, '/../', '1comprimitBase64.txt.gz'); //Si té el mateix nom que l'anterior comprimit es queda penjat i no el genera

        let decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        let decipher2 = crypto.createDecipheriv('aes-256-cbc', key, iv);

        let sourceCriptHex = fs.createReadStream(rutaCriptHex);
        let destiHex = fs.createWriteStream(rutaHex);

        sourceCriptHex.pipe(decipher).pipe(destiHex);

        destiHex.on('finish', () => {
            let sourceCriptBase64 = fs.createReadStream(rutaCriptBase64);
            let destiBase64 = fs.createWriteStream(rutaBase64);

            sourceCriptBase64.pipe(decipher2).pipe(destiBase64);

            destiBase64.on('finish', () => {
                resolve(console.log("Deciphers tots els fitxers"));
            });
        });

    })
}

async function descomprimir(ruta) {
    return new Promise((resolve, reject) => {
        const rutaHex = path.join(ruta, '/../', '1comprimitHex.txt.gz');
        const rutatxtHex = path.join(ruta, '/../', 'Hex_descomprimit.txt');
        const rutaBase64 = path.join(ruta, '/../', '1comprimitBase64.txt.gz');
        const rutatxtBase64 = path.join(ruta, '/../', 'Base64_descomprimit.txt');

        const source = fs.createReadStream(rutaHex);
        const destiHex = fs.createWriteStream(rutatxtHex);
        source.pipe(zlib.createUnzip()).pipe(destiHex);

        destiHex.on('finish', () => {

            const sourceB = fs.createReadStream(rutaBase64);
            const destiB = fs.createWriteStream(rutatxtBase64);
            sourceB.pipe(zlib.createUnzip()).pipe(destiB);

            destiB.on('finish', () => {
                resolve(console.log(`Fitxers descomprimits gravats`))
            })
        })
    })

}

async function principal(ruta) {
    console.log("/////////////INICI//////////////");
    await codificador(ruta);
    await encriptarBorrarOriginals(ruta);
    await desencreptarDescodificar(ruta);
    await descomprimir(ruta);
    console.log("/////////////FINAL//////////////");
}

//////////MAIN////////////
const RUTA = path.join(__dirname, '/../', 'nivell-1', 'fitxers', 'text.txt');
principal(RUTA);

