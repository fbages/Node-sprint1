//Modules
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
console.log(key, iv);

async function codificador(ruta) {
    return new Promise((resolve, reject) => {
        const rutaHex = path.join(ruta, '/../', 'Hex.txt');

        const source = fs.createReadStream(ruta, { encoding: 'hex' });
        const destiHex = fs.createWriteStream(rutaHex);
        source.pipe(destiHex);
        console.log(`Fitxer en Hex gravat`);

        destiHex.on('finish', () => {
            const rutaBase64 = path.join(ruta, '/../', 'Base64.txt');

            const sourceBase64 = fs.createReadStream(ruta, { encoding: 'base64' });
            const destiBase64 = fs.createWriteStream(rutaBase64);
            sourceBase64.pipe(destiBase64);

            destiBase64.on('finish', () => {
                resolve(console.log(`Fitxer en Base 64 gravat`));
            })

        })



    })
}

async function encriptarBorrarOriginals(ruta) {
    return new Promise((resolve, reject) => {
        const rutaHex = path.join(ruta, '/../', 'Hex.txt');
        const rutaBase64 = path.join(ruta, '/../', 'Base64.txt')
        const rutaCriptHex = path.join(ruta, '/../', 'Hex.txt.enc');
        const rutaCriptBase64 = path.join(ruta, '/../', 'Base64.txt.enc');

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

async function desencriptarDescodificar(ruta) {
    console.log("Començar a descifrar");
    return new Promise((resolve, reject) => {

        const rutaCriptHex = path.join(ruta, '/../', 'Hex.txt.enc');
        const rutaCriptBase64 = path.join(ruta, '/../', 'Base64.txt.enc');
        const rutaHex = path.join(ruta, '/../', '1Hex.txt'); //Si té el mateix nom que l'anterior comprimit es queda penjat i no el genera
        const rutaBase64 = path.join(ruta, '/../', '1Base64.txt'); //Si té el mateix nom que l'anterior comprimit es queda penjat i no el genera

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

async function descodificar(ruta) {
    return new Promise((resolve, reject) => {
        const rutaHex = path.join(ruta, '/../', '1Hex.txt');
        const rutaBase64 = path.join(ruta, '/../', '1Base64.txt');
        const rutaexHex = path.join(ruta, '/../', '1exHex.txt'); //Si té el mateix nom que l'anterior comprimit es queda penjat i no el genera
        const rutaexBase64 = path.join(ruta, '/../', '1exBase64.txt'); //Si té el mateix nom que l'anterior comprimit es queda penjat i no el genera

        const hexDecoded = fs.readFileSync(rutaHex, 'utf8', (error) => {
            if (error) {
                throw error;
            }

        })
        const base64Decoded = fs.readFileSync(rutaBase64, 'utf8', (error) => {
            if (error) {
                throw error;
            }
        })

        //High order function per fer la conversio d'una codificacio a un altre
        const convert = (from, to) => str => Buffer.from(str, from).toString(to);
        const hextoutf8 = convert('hex', 'utf8');
        const base64toutf8 = convert('base64', 'utf8');

        const destirutaexHex = fs.createWriteStream(rutaexHex);
        const destirutaexBase64 = fs.createWriteStream(rutaexBase64);

        resolve(destirutaexHex.write(hextoutf8(hexDecoded)));
        resolve(destirutaexBase64.write(base64toutf8(base64Decoded)));

    })
}

//////////////////////////FUNCIO PRINCIPAL////////////////////

async function principal(ruta) {
    console.log("/////////////INICI//////////////");
    await codificador(ruta);
    await encriptarBorrarOriginals(ruta);
    await desencriptarDescodificar(ruta);
    await descodificar(ruta);
    console.log("/////////////FINAL//////////////");
}

//////////DEFINICIO DE LA RUTA DEL FITXER I INICIALITZACIO////////////
const RUTA = path.join(__dirname, '/../', 'nivell-1', 'fitxers', 'text.txt');
principal(RUTA);

