let promesa1 = new Promise((resolve,reject)=>{
    if(!true){
        resolve(console.log("hola"))
    } else {
        reject(console.log("adeu"))
    }
})

