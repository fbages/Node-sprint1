function funcCalcul(valor){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(valor * 2)
        },2000);
    })
}

async function funcDoble(valor){
    const resultat = await funcCalcul(valor);
    console.log(`El doble de ${valor} és ${resultat}`)
}

funcDoble(100);