const matriuFuncions = [];

function omplirMatriu(){
    
    for (let i = 0; i < 10; i++){
        matriuFuncions.push( ()=>{
            console.log(i);
        })
    }
    

}
//Generar la matriu amb 10 funcions
omplirMatriu();
    
//Crida 10 vegades la matriu amb les seves funcions
for (let j = 0; j < 10; j++){
    matriuFuncions.forEach(element => {
        element();
    });;
    console.log(`--Següent iteració--`)
}
