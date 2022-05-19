//Modul pels executar subprocessos
const { exec } = require('child_process');

//Si el proces requereix de molts dades millor utilitzar spawn, ja que exec guardar en el buffer i ocupar memoria
//Commands van lligats amb &
exec('cd/ & dir', (err, stdout, stderr) => {
    if (err) console.log(err.message)
    if (stderr) console.log(stderr) //output secundari
    console.log(stdout);    //output primari
})